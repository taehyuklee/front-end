import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

import VueGoodTablePlugin from 'vue-good-table-next';

// import the styles
import 'vue-good-table-next/dist/vue-good-table-next.css'

const app  = createApp(App)
app.use(router)
app.use(VueGoodTablePlugin); //vue good table
app.use(vuetify);

app.mount('#app')