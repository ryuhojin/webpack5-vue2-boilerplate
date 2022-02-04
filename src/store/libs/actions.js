/**
 * @library Vuex Library 
 * @author 류호진 
 */

/**
 * @name AsyncMutationCreator
 * @param {string} mutationType
 * @description 뮤테이션을 정의하여 주는 뮤테이션 크리에이터
 *              , 상수 타입의 뮤테이션을 생성해준다.
 * @returns object
 */
export const AsyncMutationCreator = (mutationType) => ({
  PENDING: `${mutationType}_PENDING`,
  SUCCESS: `${mutationType}_SUCCESS`,
  FAILURE: `${mutationType}_FAILURE`,
});
