import Vue from 'vue'
import VueRouter from 'vue-router'

/* 路由懒加载 */
const Layout = () =>import('@/layout/index.vue')

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
        id: 2,
        path: '/about',
        name: 'About',
        label: '关于我们',
        meta: {
          activeTab: false
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        id: 3,
        path: '/home',
        name: 'Home',
        label: '首页',
        meta: {
          activeTab: false
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
