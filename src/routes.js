// default
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Pages
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/404Page";
import NotifyPage from "@/pages/NotifyPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/notify",
    name: "notify",
    component: NotifyPage,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
