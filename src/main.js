import { createApp } from "vue";
import App from "./App.vue";
// import "./filters";
// import Vant from "vant";
import router from "./router";
import store from "./store";
import "vant/lib/index.less";
import "./styles/index.less";

import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Toast,
  Calendar,
  Checkbox,
  CheckboxGroup,
  Field,
  Form,
  RadioGroup,
  Radio,
  Notify,
  NavBar,
  Tab,
  Tabs,
  Switch,
  Tabbar,
  TabbarItem
} from "vant";

createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Toast)
  .use(Calendar)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Field)
  .use(Form)
  .use(Radio)
  .use(Notify)
  .use(NavBar)
  .use(Switch)
  .use(Tab)
  .use(Tabs)
  .use(Tabbar)
  .use(TabbarItem)
  .use(RadioGroup)
  .mount("#app");
