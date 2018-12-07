import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ArticleCreations from "./pages/ArticleCreations";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },
    { path: "/", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/login", component: Login, name: "login" },
    {
      path: "/articleCreate",
      component: ArticleCreations,
      name: "articleCreations"
    }
  ]
});
