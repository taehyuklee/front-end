import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'
// bootstrap의 경우 전역으로 import해서 사용해야 하므로 main.js에서 시작한다.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// 여기서 global로 component를 등록하면 어디서든 사용 가능하다.
const app = createApp(App)
app.use(store)
app.use(router)
app.component('page-title', PageTitle)
app.mount('#app')
