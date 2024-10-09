import loadMore from "../assets/js/loadMore.js";

export default {
  state: {
    repos: [],
  },
  mutations: {
    setRepos(state, payload) {
      state.messages = payload;
    },
    loadRepos(state, payload) {
      state.messagesMain = [...state.messagesMain, ...payload];
    },
  },
  actions: {
    setRepos({commit}, payload) {
      console.log("payload", payload);
      commit("setRepos", payload);
    },
    loadRepos({commit, getters}) {
      let res = getters.getMessageFilter;
      commit("loadRepos", loadMore(res));
    },
  },
  getters: {
    getRepos(state) {
      console.log("state.repos", state.repos);
      return state.repos;
    },
  },
};
