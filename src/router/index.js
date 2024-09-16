import Vue from "vue";
import VueRouter from "vue-router";
import {Home, NotesOverview, NotFound, PicturesView} from "../views/index.ts";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home Page",
      showInHeader: true,
    },
  },
  {
    path: "/notes",
    name: "Notes Overview",
    component: NotesOverview,
    meta: {
      title: "Store view",
      showInHeader: true,
    },
  },
  {
    path: "/pictures",
    name: "Pictures View",
    component: PicturesView,
    meta: {
      title: "Pictures View",
      showInHeader: true,
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      title: "Page Not Found",
      showInHeader: false,
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
