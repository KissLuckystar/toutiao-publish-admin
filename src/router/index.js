import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login' // @指向src目录
import Home from '@/views/home'
import Layout from '@/views/layout'

Vue.use(VueRouter)
// 路由配置
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '', // path为空为默认子路由页面
        name: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
