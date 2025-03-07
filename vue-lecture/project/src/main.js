import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// index.js의 경우 해당 디렉토리 path만 등록해줘도 알아서 가져오게 된다.
import mixin from './mixins'
// i18n Plugin
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import PageTitle from './components/fragments/PageTitle.vue'
// bootstrap의 경우 전역으로 import해서 사용해야 하므로 main.js에서 시작한다.
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// key, value 똑같을때 생략 가능 원래는 {en:en, ko:ko} 임.
const i18nStrings = { en, ko }
/*
 * 실제로 i18nStrings
 * {
 *  en : {
 *    hi: 'Hello',
 *    search: 'Search',
 *    save: 'Save'
 *  },
 *  ko : {
 *    hi: '안녕하세요',
 *    search: '조회',
 *    save: '저장'
 *  }
 * }
 */

// 여기서 global로 component를 등록하면 어디서든 사용 가능하다.
const app = createApp(App)
app.use(store)
app.use(router)
// 전역 component등록
app.component('page-title', PageTitle)

// 전역 mixin 등록
app.mixin(mixin)

// plugin 등록
app.use(i18nPlugin, i18nStrings)

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
