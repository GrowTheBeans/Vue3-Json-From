import { createApp } from "vue";
import App from "./App.vue";
import Vant from "vant";
import router from "./router";
import store from "./store";
import "vant/lib/index.less";
import "./styles/index.less";

createApp(App)
  .use(Vant)
  .use(store)
  .use(router)
  .mount("#app");
