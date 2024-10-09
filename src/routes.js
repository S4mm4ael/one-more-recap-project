// default
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Pages
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/404Page";
import RepositoryPage from "@/pages/RepositotoryPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/repo",
    name: "Repository Search",
    component: RepositoryPage,
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
