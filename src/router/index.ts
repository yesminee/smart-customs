import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/auth/Login.vue";
import DRD from "../views/DRD/DRD.vue";
import BFC from "../views/BFC/BFC.vue";

const history = createWebHistory();
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/DRD", component: DRD },
  { path: "/BFC", component: BFC },
];
const router = createRouter({ history, routes });

router.beforeEach((to, from, next) => {
  /*if (
    to.path == "/DRD" &&
    (!localStorage.getItem("user") ||
      // @ts-ignore
      localStorage.getItem("user").type !== "DRD")
  )
    return next("/login");

  if (
    to.path == "/BFC" &&
    (!localStorage.getItem("user") ||
      // @ts-ignore
      localStorage.getItem("user").type !== "BFC")
  )
    return next("/login");*/

  next();
});

export default router;
