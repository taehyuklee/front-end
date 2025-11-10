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
        /* webpackChunkName: "open_apis", webpackPrefetch:true */ '@/views/menu/OpenApiDetails/SampleOpenApi.vue'
      ),
  },
  // {
  //   path: '/coin_dashboard/',
  //   name: 'CoinDashboard',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "coin_dashboard", webpackPrefetch:true */ '@/views/menu/CoinDashboardView.vue'
  //     ),
  // },
  // {
  //   path: '/coin_dashboard/chart',
  //   name: 'CoinChart',
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "coin_chart", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinToolsView.vue'
  //     ),
  // },
  {
    path: '/coin_dashboard',
    name: 'CoinDashboard',
    component: () =>
      import(
        /* webpackChunkName: "coin_dashboard", webpackPrefetch:true */ '@/views/menu/CoinDashboardView.vue'
      ),
    children: [
      {
        path: 'chart', // ✅ 절대경로(/) 쓰지 않음
        name: 'CoinStick',
        component: () =>
          import(
            /* webpackChunkName: "coin_chart", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinTools/CandleStickView.vue'
          ),
      },
      {
        path: 'timeseries', 
        name: 'CoinTimeseries',
        component: () =>
          import(
            /* webpackChunkName: "coin_chart", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinTools/TimeseriesView.vue'
          ),
      },
      {
        path: 'data', // ✅ 추가 가능
        name: 'CoinTimeSeries',
        component: () =>
          import(
            /* webpackChunkName: "coin_timeseries", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinDataView.vue'
          ),
      },
    ],
  }


]

const router = createRouter({
  // history: createWebHistory('/my-service/'),
  history: createWebHashHistory(''),
  routes
})

export default router