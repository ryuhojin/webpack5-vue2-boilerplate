import store from "../index";
/**
 * @library Vuex Library
 * @author 류호진
 */

/**
 * @name AsyncThunk
 * @param {string} moduleName
 * @param {string} asyncMutationType
 * @param {string} asyncFunc
 * @description Vuex의 Thunk로써 동작과정에 대해서 ACTION에 대하여 PENDING, SUCCESS, ERROR로 동작하게 하여준다.
 */
const AsyncThunk = async (moduleName, asyncMutationType, asyncFunc) => {
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
export default AsyncThunk;
