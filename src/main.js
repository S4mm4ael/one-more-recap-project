import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/main.scss";

import Vuelidate from "vuelidate";
import VueCarousel from "vue-carousel";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
