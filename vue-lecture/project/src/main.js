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
// 전역 component등록
app.component('page-title', PageTitle)

// Custom Directive의 경우 전역에서 사용하는 것이 맞기에 main.js에 app.directive속성에 직접 넣어주도록 한다.
app.directive('focus', {
  mounted(el, binding) {
    el.focus()
  }
})
app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', ($event) => {
      $event.target.value = $event.target.value.toLowerCase()
    })
  }
})
app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', ($event) => {
      $event.target.value = $event.target.value.toUpperCase()
    })
  }
})
app.directive('number', {
  mounted(el) {
    el.addEventListener('input', ($event) => {
      $event.target.value = $event.target.value.replace(/[^0-9]/g, '')
    })
  }
})
app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', ($event) => {
      $event.target.value = $event.target.value.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
    })
  }
})

app.mount('#app')
