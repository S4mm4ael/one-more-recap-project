import Vue from "vue";
import Vuex from "vuex";
import {messageStore} from "./message-store";
import {picturesStore} from "./pictures-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    messageStore: messageStore,
    picturesStore: picturesStore,
  },
});
