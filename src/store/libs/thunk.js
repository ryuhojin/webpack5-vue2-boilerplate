import store from "../index";

const asyncThunk = async (moduleName, asyncMutationType, asyncFunc) => {
  const existPendingMutation =
    store._mutations[`${moduleName}/${asyncMutationType.PENDING}`] !==
    undefined;

  if (existPendingMutation) {
    store.commit(`${moduleName}/${asyncMutationType.PENDING}`);
  }

  try {
    const res = await asyncFunc;
    const existSuccessMutation =
      store._mutations[`${moduleName}/${asyncMutationType.SUCCESS}`] !==
      undefined;

    if (existSuccessMutation) {
      store.commit(`${moduleName}/${asyncMutationType.SUCCESS}`, res.data.data);
    }
  } catch (e) {
    const existFailureMutation =
      store._mutations[`${moduleName}/${asyncMutationType.FAILURE}`] !==
      undefined;

    existFailureMutation
      ? store.commit(
          `${moduleName}/${asyncMutationType.FAILURE}`,
          e.response.data.error
        )
      : console.error(e);
  }
};
export default asyncThunk;
