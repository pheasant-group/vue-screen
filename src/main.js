import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/style/index.scss";
import { ColorPicker, Input, Select, Option, Button } from "element-ui";
import * as echarts from "echarts";
import Border1 from "@/components/Border1";
import Border2 from "@/components/Border2";

Vue.use(Border1);
Vue.use(Border2);
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
