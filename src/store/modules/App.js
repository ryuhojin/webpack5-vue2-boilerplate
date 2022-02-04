import { AsyncMutationCreator } from "../libs/actions";
import AsyncThunk from "../libs/thunk";

/**
 * @name name
 * @description 모듈의 이름
 *              , Thunk시에 모듈의 이름이 되기도 함
 */
const name = "app";

/**
 * @name asyncCreator
 * @description 동기적 처리에 대한 객체
 */
const asyncCreator = {
  fetchApp: AsyncMutationCreator("FETCH_APP"),
};

/**
 * @name state
 * @description Vuex 상태
 */
const state = {
  app: {
    isLoading: false,
    error: null,
    data: null,
  },
};

/**
 * @name mutations
 * @description VUEX 상태관리의 동기적 처리를 위함
 */
const mutations = {
  [asyncCreator.fetchApp.PENDING]: (state) => ({
    ...state,
    app: {
      isLoading: true,
      error: null,
      data: null,
    },
  }),
  [asyncCreator.fetchApp.SUCCESS]: (state, payload) => ({
    ...state,
    app: {
      isLoading: false,
      error: null,
      data: payload,
    },
  }),
  [asyncCreator.fetchApp.FAILURE]: (state, payload) => ({
    ...state,
    app: {
      isLoading: false,
      error: payload,
      data: null,
    },
  }),
};

/**
 * @name actions
 * @description VEUX 상태관리의 비동기 처리도 가능함
 *              , 이것은 Mutation에서 다수의 상태 변경이 비동기적으로 수행되었을 경우 예측 불가능한 상태가 되는 것을 막기위한 의도
 *              , Action에서는 Mutation으로 commit을 행함으로써 간접적으로 상태를 변경하지만 Action을 호출하기 위한 dispatch 메소드는 Promise를 반환 => 처리의 순서를 제어
 */
const actions = {
  fetchApp: async () => {
    await AsyncThunk(name, asyncCreator.fetchApp, setTimeout(1));
  },
};

/**
 * @name getters
 * @description 말그대로 getters 비동기 Thunk Library를 사용하면
 *              , PENDING 타이밍을 변수로 잡아서 활용 가능하다.
 */
const getters = {
  getApp: (state) => {
    return state.app;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
