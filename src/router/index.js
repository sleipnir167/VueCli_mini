import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HeaderBody from '../views/HeaderBody.vue'
import Sandbox from '../views/SandBox.vue'
import SyaryouDaicho from '../views/SyaryouDaicho.vue'
import Sample from '../views/Sample.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // sandbox パスの追加
    path: '/headerBody',
    name: 'headerBody',
    component: HeaderBody
  },
  {
    // sandbox パスの追加
    path: '/sandbox',
    name: 'sandbox',
    component: Sandbox
  },
  {
    // SyaryoDaicho パスの追加
    path: '/SyaryouDaicho',
    name: 'SyaryouDaicho',
    component: SyaryouDaicho
  },
  {
    // sample パスの追加
    path: '/sample',
    name: 'sample',
    component: Sample
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
