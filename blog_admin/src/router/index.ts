import Vue from 'vue'
import VueRouter from 'vue-router'
import article from './article'

/* 路由懒加载 */
const Layout = () => import('@/layout/index.vue')
const Dashboard = () => import('@/views/dashboard/index.vue')
const BlogList = () => import('@/views/blogList/index.vue')
const CreateBlog = () => import('@/views/blogList/createBlog.vue')
const EditBlog = () => import('@/views/blogList/editBlog.vue')

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
        id: 4,
        path: '/blogList',
        name: 'BlogList',
        label: '博客列表',
        meta: {
          activeTab: false
        },
        component: BlogList
      },
      {
        id: 5,
        path: '/createBlog',
        name: 'CreateBlog',
        label: '创建博客',
        meta: {
          activeTab: false
        },
        component: CreateBlog
      },
      {
        id: 6,
        path: '/editBlog',
        name: 'EditBlog',
        label: '编辑博客',
        meta: {
          activeTab: false,
          hidden: true // 隐藏菜单
        },
        component: EditBlog
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
  },
  ...article
]

const router = new VueRouter({
  routes
})

export default router
