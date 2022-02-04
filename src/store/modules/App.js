import { AsyncMutationCreator } from "../libs/actions";
import asyncThunk from "../libs/thunk";

const name = "app";

const asyncCreator = {
  fetchApp: AsyncMutationCreator("FETCH_APP"),
};

const state = {
  app: {
    isLoading: false,
    error: null,
    data: null,
  },
};

const mutations = {
  [ASYNC.GET_APP.PENDING]: (state) => ({
    ...state,
    app: {
      isLoading: true,
      error: null,
      data: null,
    },
  }),
  [ASYNC.GET_APP.SUCCESS]: (state, payload) => ({
    ...state,
    app: {
      isLoading: false,
      error: null,
      data: payload,
    },
  }),
  [ASYNC.GET_APP.FAILURE]: (state, payload) => ({
    ...state,
    app: {
      isLoading: false,
      error: payload,
      data: null,
    },
  }),
};

const actions = {
  fetchApp: async () => {
    await asyncThunk(NAME, asyncCreator.fetchApp, setTimeout(1));
  },
};

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
