import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Hello Vuex!",
  },
  getters: {},
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
});
