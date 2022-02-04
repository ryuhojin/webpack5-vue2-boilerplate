export const AsyncMutationCreator = (mutationType) => ({
  PENDING: `${mutationType}_PENDING`,
  SUCCESS: `${mutationType}_SUCCESS`,
  FAILURE: `${mutationType}_FAILURE`,
});
