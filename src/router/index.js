import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import("@/views/home/index.vue"),
  // }
  {
    path: '/',
    component: () => import('@/layout/index.vue')
  }
];

const router = new Router({
  routes,
});
export default router;
