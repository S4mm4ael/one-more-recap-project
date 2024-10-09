export default {
  state: {
    repos: [],
  },
  mutations: {
    setRepos(state, payload) {
      state.repos = payload;
    },
  },
  actions: {
    setRepos({commit}, payload) {
      console.log("payload", payload);
      commit("setRepos", payload);
    },
  },
  getters: {
    getRepos(state) {
      return state.repos;
    },
  },
};
