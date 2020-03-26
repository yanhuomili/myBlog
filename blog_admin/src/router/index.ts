import Vue from 'vue'
import VueRouter from 'vue-router'

/* 路由懒加载 */
const Layout = () => import('@/layout/index.vue')
const Dashboard = () => import('@/views/dashboard/index.vue')

Vue.use(VueRouter)

const routes = [
  {
    id: 1,
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        id: 999,
        path: '/dashboard',
        name: 'Dashboard',
        label: '首页展示',
        meta: {
          activeTab: false
        },
        component: Dashboard
      },
      {
        id: 2,
        path: '/home',
        name: 'Home',
        label: '首页',
        meta: {
          activeTab: false
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
      {
        id: 3,
        path: '/about',
        name: 'About',
        label: '关于我们',
        meta: {
          activeTab: false
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
