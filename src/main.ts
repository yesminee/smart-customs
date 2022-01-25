import { createApp } from 'vue'
import App from './App.vue'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router/index";

createApp(App).use(router).mount("#app");