import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router