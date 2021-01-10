import { createApp } from "vue";
import App from "./App.vue";
import Vant from "vant";
import router from "./router";
import store from "./store";
import "./styles/index.less";
import "vant/lib/index.css";

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount("#app");
