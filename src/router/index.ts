import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/auth/Login.vue";
import SignUp from "../views/auth/SignUp.vue";
import DRD from "../views/DRD/DRD.vue";
import BFC from "../views/BFC/BFC.vue";
import Magasin from "../views/utilisateur/Magasin.vue";
const history = createWebHistory();
const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/DRD", component: DRD },
  { path: "/BFC", component: BFC },
  { path: "/magasin", component: Magasin },
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
    return next("/login");
*/
  next();
});

export default router;
