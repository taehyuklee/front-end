import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // 위의 경우 import를 하게 된다. 따라서 해당 Tab을 눌러 Router기능을 만든다면, app.js -> about2.js를 불러오게 된다. (그때 불러오는 이름을 webpackChunkName으로 조절 할 수 있다)
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')

    // 아래 webpackPreFetch Option이란 무엇인가?
    // component: () => import(/* webpackChunkName: "about", webpackPrefetch:true */ '../views/AboutView.vue')

  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingInputView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
