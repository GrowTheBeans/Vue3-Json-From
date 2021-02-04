import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Success from "../components/success.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "home",
        component: () => import("../views/TabBar/Home.vue"),
        redirect: { name: "recommend" },
        children: [
          {
            path: "recommend",
            name: "recommend",
            component: () => import("../views/TabBar/Music/recommend.vue"),
          },
          {
            path: "singer",
            name: "singer",
            component: () => import("../views/TabBar/Music/singer.vue"),
          },
          {
            path: "ranking",
            name: "ranking",
            component: () => import("../views/TabBar/Music/ranking.vue"),
          },
        ],
      },
      {
        path: "detail",
        component: () => import("../views/TabBar/Detail.vue"),
        redirect: { name: "seller" },
        children: [
          {
            path: "seller",
            name: "seller",
            component: () => import("../views/TabBar/Order/seller.vue"),
          },
          {
            path: "goods",
            name: "goods",
            component: () => import("../views/TabBar/Order/goods.vue"),
          },
          {
            path: "ratings",
            name: "ratings",
            component: () => import("../views/TabBar/Order/ratings.vue"),
          },
        ],
      },
      {
        path: "edit",
        component: () => import("../views/TabBar/Edit.vue"),
      },
      {
        path: "study",
        component: () => import("../views/TabBar/Study.vue"),
      },
      {
        path: "mine",
        component: () => import("../views/TabBar/Mine.vue"),
      },
    ],
  },
  {
    path: "/mjd",
    component: () => import("../views/Mjd/index.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/Mjd/pages/Home.vue"),
      },
      {
        path: "logins",
        name: "Logins",
        component: () => import("../views/Mjd/pages/Logins"),
      },
      {
        path: "register",
        name: "Register",
        component: () => import("../views/Mjd/pages/Register.vue"),
      },
      {
        path: "shopping",
        name: "Shopping",
        component: () => import("../views/Mjd/pages/Shopping.vue"),
      },
      {
        path: "order",
        name: "Order",
        component: () => import("../views/Mjd/pages/Order.vue"),
      },
      {
        path: "my",
        name: "My",
        component: () => import("../views/Mjd/pages/My.vue"),
      },
    ],
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/*webpackChunkName: "login" */ "../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
