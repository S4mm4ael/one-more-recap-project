import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";

import router from "./routes";
import store from "./store";

import "./assets/scss/main.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
