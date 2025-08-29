import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import MainView from '../views/menu/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'MainHome',
    component: MainView
  },
  {
    path: '/dashboard/',
    name: 'Dashboard',
    component: () =>
      import(
        /* webpackChunkName: "dashboard", webpackPrefetch:true */ '@/views/menu/Dashboard.vue'
      )
  },
  {
    path: '/notification/',
    name: 'Notification',
    // component: NotificationView
    component: () =>
      import(
        /* webpackChunkName: "notification", webpackPrefetch:true */ '@/views/menu/NotificationView.vue'
      )
  },
  {
    path: '/open_apis/',
    name: 'OpenAPIs',
    component: () =>
      import(
        /* webpackChunkName: "open_apis", webpackPrefetch:true */ '@/views/menu/OpenApis.vue'
      ),
  },
]

const router = createRouter({
  // history: createWebHistory('/my-service/'),
  history: createWebHashHistory(''),
  routes
})

export default router