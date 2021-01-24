import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const Signup = () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Error',
    component: () => import('../views/Error.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
