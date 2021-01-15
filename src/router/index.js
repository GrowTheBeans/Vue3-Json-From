import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Success from "../components/success.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/TabBar/Home.vue")
      },
      {
        path: "detail",
        component: () => import("../views/TabBar/Detail.vue")
      },
      {
        path: "edit",
        component: () => import("../views/TabBar/Edit.vue")
      },
      {
        path: "mine",
        component: () => import("../views/TabBar/Mine.vue")
      }
    ]
  },
  {
    path: "/success",
    name: "Success",
    component: Success
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/*webpackChunkName: "login" */ "../views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
