import Vue from "vue";
import VueRouter from "vue-router";
import {Home, NotesOverview, NotFound, ProductView} from "../views/index.ts";
import ProductPage from "@/views/ProductPage.vue";

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
    path: "/products",
    name: "Products View",
    component: ProductView,
    meta: {
      title: "Products View",
      showInHeader: true,
    },
  },
  {
    path: "/products/:id",
    name: "Product View",
    component: ProductPage,
    meta: {
      title: "Product View",
      showInHeader: false,
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
