import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataV from "@jiaminghi/data-view";
import "@/style/common.scss";
import "@/config/dv-charts.js";
import { ColorPicker } from "element-ui";

Vue.config.productionTip = false;

Vue.use(dataV);
Vue.use(ColorPicker);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
