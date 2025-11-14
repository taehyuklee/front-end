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
  {
    path: '/coin_chart',
    name: 'CoinChart',
    component: () =>
      import(
        /* webpackChunkName: "coin_dashboard", webpackPrefetch:true */ '@/views/menu/CoinDashboardView.vue'
      ),
    children: [
      {
        path: 'candle', // 절대경로(/) 쓰지 않음
        name: 'CoinCandleStick',
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
      }
    ],
  },
  {
    path: '/coin_data',
    name: 'CoinData',
    component: () =>
      import(
        /* webpackChunkName: "coin_dashboard", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinDataView.vue'
      ),
      children: [
        // {
        //   path: 'data', // 절대경로(/) 쓰지 않음
        //   name: 'CoinData',
        //   component: () =>
        //     import(
        //       /* webpackChunkName: "coin_chart", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinDataView.vue'
        //     ),
        // }
      ],
  },
  {
    path: '/coin_ans',
    name: 'CoinAnalysis',
    component: () =>
      import(
        /* webpackChunkName: "coin_dashboard", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinAnalysisView.vue'
      ),
      children: [
        // {
        //   path: 'data', // 절대경로(/) 쓰지 않음
        //   name: 'CoinData',
        //   component: () =>
        //     import(
        //       /* webpackChunkName: "coin_chart", webpackPrefetch:true */ '@/views/menu/CoinDashboardDetails/CoinDataView.vue'
        //     ),
        // }
      ],
  }


]

const router = createRouter({
  // history: createWebHistory('/my-service/'),
  history: createWebHashHistory(''),
  routes
})

export default router