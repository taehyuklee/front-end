import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { createPinia } from 'pinia'

// DataPicker  (https://vue3datepicker.com/installation/꺼 사용)
import { VueDatePicker } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app  = createApp(App)
app.use(router)
app.use(VueGoodTablePlugin); //vue good table
app.use(vuetify);
app.component('VueDatePicker', VueDatePicker);

// 여기서 Pinia 등록
const pinia = createPinia()
app.use(pinia)  

app.mount('#app')