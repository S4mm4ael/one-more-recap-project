// default
import {createMemoryHistory, createRouter} from "vue-router";

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
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes,
});

export default router;
