import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'

// 여기서 global로 component를 등록하면 어디서든 사용 가능하다.
const app = createApp(App)
app.use(store)
app.use(router)
app.component('page-title', PageTitle)
app.mount('#app')
