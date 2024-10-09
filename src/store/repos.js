import loadMore from "../assets/js/loadMore.js";

export default {
  state: {
    repos: [],
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
    loadRepos(state, payload) {
      state.repos = [...state.messagesMain, ...payload];
    },
  },
  actions: {
    setRepos({commit}, payload) {
      console.log("payload", payload);
      commit("setRepos", payload);
    },
    loadRepos({commit, getters}) {
      let res = getters.loadRepos;
      commit("loadRepos", loadMore(res));
    },
  },
  getters: {
    getRepos(state) {
      return state.repos;
    },
  },
};
