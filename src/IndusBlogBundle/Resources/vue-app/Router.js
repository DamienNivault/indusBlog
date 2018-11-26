import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Register from "./pages/Register";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "Home"
      }
    },
    { path: "/", component: Home, name: "Home" },
    { path: "/register", component: Register, name: "Register" }
  ]
});
