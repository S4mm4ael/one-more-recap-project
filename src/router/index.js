import Vue from "vue";
import VueRouter from "vue-router";
import {Home, NotesOverview, NotFound} from "../views/index.ts";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home Page",
    },
  },
  {
    path: "/notes",
    name: "Notes Overview",
    component: NotesOverview,
    meta: {
      title: "Notes Overview",
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Page Not Found",
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
router.beforeEach((to, from, next) => {
  document.title = to.meta?.title ?? "Default Title";
  next();
});

export default router;
