import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由级别的代码分割
    // 这会为此路由生成一个单独的块 (about.[hash].js)
    // 当访问路由时才会加载
    component: () => import('../views/About.vue')
  },
  {
    path: '/dynamic-list',
    name: 'DynamicList',
    component: () => import('../views/DynamicList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

