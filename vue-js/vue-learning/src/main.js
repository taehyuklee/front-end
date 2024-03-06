import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'

//Component에서 export default로 받아온 Object를 vue의 createApp method 인자로 넣어준다.
const app = createApp(App); //createApp에 Root Component를 넣어주도록 한다.

//app instance는 .mount() 메서드가 호출될 때까지 아무 것도 렌더링 하지 않는다.
app.mount('#app');

/*해석 -> #app은 index.html의 <div id=app></div> tag안에 위의 app 인스턴스(컴포넌트)를 장착시키겠다 (마운트 하겠다)라는 의미를 갖게 된다. 
 위와 같이 하면 최상위 컴포넌트 컨텐츠가 div id=app 컨테이너 엘리먼트내에 렌더링 되게 된다.*/


//아래와 같이 .Vue 컴포넌트처럼 정의되어 있지 않는다면 해당 object에서 data method를 통해 그 안의 내용이 mount target element tag의 innerHTML을 통해서 내용이 전달된다
//옛날에는 아래 객체 인스턴스에 el 이라는 속성을 두고 mount할 html tag를 지치하기도 했다 el: '#app', 과 같이
const app_instance = {
    //object instance의 method (function data())
    data(){
        return{
            count: 0,
        }
    }
}

//앱 환경 설정
 /*그리고, 앱 인스턴스에서 .config객체를 노출할 수 있다. app 객체 안에 속성중에 config라는 객체가 있나보다 그리고 그 config객체 안에 errorHandler 메소드가 존재 이걸 overriding하는 거*/
 app.config.errorHandler = (err) => {
    console.log("해당 에러는 다음과 같습니다\n" + err);
}


//앱 인스턴스 app은 앱 범위의 에셋을 등록하기 위한 작업을 지원한다. (예를 들어 컴포넌트 등록)
app.component(app_instance); //https://ko.vuejs.org/api/application - app의 API들 설명들

//이렇게 되면 app_instance를 앱 범위내 어디에서나 사용이 가능하다.


//멀티 앱 인스턴스 - 앱 인스턴스는 동일한 페이지 내 하나로 제한되지 않는다. createApp(); API를 사용하면 여러 Vue앱이 동일한 페이지에 공존 할 수 있다.
//예를 들어 위에서 createApp한 app과 동시에 아래와 같이 app2를 만들수 있다. 

const app2 = createApp(app_instance);
app2.mount('#app2');

