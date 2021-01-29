import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
const Login = () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
const Signup = () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Error',
    component: () => import('../views/Error.vue'),
    meta: {
      title: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  window.document.title = `粽子系统 - ${to.meta.title}`
  next()
})

export default router
