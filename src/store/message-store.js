export const messageStore = {
  state: {
    message: "Hello Vuex!",
  },
  getters: {
    getMessage: (state) => state.message,
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    setMessage({commit}, payload) {
      commit("setMessage", payload);
    },
  },
  modules: {
    getMessage: (state) => state.message,
  },
};
