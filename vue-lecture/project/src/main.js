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

// FonrtAwsome을 쓰고 싶을때 (이렇게 할 수도 있고 component처럼 등록해서 사용 가능하기도 하지만, cdn으로 추가해서 사용 가능)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserClock } from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Sweet Alert2 import
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import VueGoodTablePlugin from 'vue-good-table-next'

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

// fontawesome 사용
library.add(faUserSecret)
library.add(faUserClock)

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

// component에 fontawsome관련된 Library를 component등록해줘야 한다.
app.component('font-awesome-icon', FontAwesomeIcon)

// 전역 mixin 등록
app.mixin(mixin)

// plugin 등록
app.use(i18nPlugin, i18nStrings)

// sweetAlert2 사용
app.use(VueSweetalert2)

// vue good table 사용
app.use(VueGoodTablePlugin)

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
window.Kakao.init('c089c8172def97eb00c07217cae17495')
