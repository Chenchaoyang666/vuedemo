import Vue from "vue"; //引入Vue
import Router from "vue-router";
import login from "../components/login.vue";
import test from "../components/test.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/test",
      component: test,
    },
  ],
});
