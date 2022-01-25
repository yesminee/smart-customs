import { createWebHistory, createRouter } from "vue-router";
import Login from "../views/auth/Login.vue";
import administration from "../views/Administrateur/administration.vue";
import accueil from "../views/Superviseur/accueil.vue";

const history = createWebHistory();
const routes = [
  { path: "/login", component: Login },
  { path: "/administration", component: administration },
  { path: "/accueil", component: accueil },

];
const router = createRouter({ history, routes });

router.beforeEach((to, from, next) => {
    if(to.name=="accueil" && !localStorage.getItem("user")) return next("/");
    if(localStorage.getItem("user")){
        // @ts-ignore
      if(localStorage.getItem("user").type=='Administrateur')
        return next("/administration");
      }
      else
        return next("/accueil")
      next()
    
  })
export default router;