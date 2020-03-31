/* 路由懒加载 */
const Article = () => import('@/views/article/index.vue')
const ArticleDetail = () => import('@/views/article/articleDetail.vue')

const articleRouter = [
  {
    id: 7,
    path: '/article',
    name: 'article',
    component: Article
  },
  {
    id: 8,
    path: '/articleDetail',
    name: 'articleDetail',
    component: ArticleDetail
  }
]

export default articleRouter
