import {createApp} from "vue";
import App from './App.vue';
import AppView from './components/AppView.vue';
import AppNav from './components/AppNav.vue';
import AppHeader from './components/AppHeader.vue';
import BookComponent from './components/BookComponent.vue';


//Root Component를 다음과 같이 전달한다
const app = createApp(App);

//Component 등록
app.component("BookComponent", BookComponent); 
app.component("AppView", AppView); 
app.component("AppNav", AppNav); 
app.component("AppHeader", AppHeader); 

app.mount("#app");
