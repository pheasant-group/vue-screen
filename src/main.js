import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/common.scss";
import { ColorPicker, Input, Select, Option, Button } from "element-ui";
import * as echarts from "echarts";

Vue.use(ColorPicker);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);

Vue.prototype.$echarts = echarts;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
