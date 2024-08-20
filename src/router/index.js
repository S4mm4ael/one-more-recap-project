import Vue from "vue";
import VueRouter from "vue-router";
import {Home, NotesOverview} from "../views/index.ts";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes",
    name: "Notes Overview",
    component: NotesOverview,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
