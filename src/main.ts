import { createApp } from "vue";
import App from "./App.vue";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/index.css";
import router from "./router/index";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");
