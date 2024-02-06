import App from './App.js';
import AppView from './components/AppView.js';
import AppNav from './components/AppNav.js';
import AppHeader from './components/AppHeader.js';
import BookComponent from './components/BookComponent.js';


//Root Component를 다음과 같이 전달한다
const app = Vue.createApp(App);

//Component 등록
app.component("BookComponent", BookComponent); 
app.component("AppView", AppView); 
app.component("AppNav", AppNav); 
app.component("AppHeader", AppHeader); 

app.mount("#app");