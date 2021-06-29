import Vue from "vue";
import App from "./App.vue";
import router from './router'
import dataV from "@jiaminghi/data-view";
import '@/style/common.scss'
import '@/config/dv-charts.js'

Vue.config.productionTip = false;
Vue.use(dataV);
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
