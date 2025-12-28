/* eslint-disable */
export default {
  // plugin을 설치한다라고 생각을 많이 하잖아.
  // 여기서 app은 Vue의 app을 의미하고 options는 앞에서 i18nStrings 객체를 의미하게 된다.
  install: (app, options) => {
    // globalProperties는 전역에서 사용할 수 있는 속성들을 넣어두는 곳이다. 여기에 함수를 넣어놓겠다는 거임.
    // 여기서도 $translate 달러표시를 붙임 : 일부러 달러를 붙여서 정의함 mixins에서 붙인 이유와 같다.
    // javascript에서 객체에 key value 넣을때 아래와 같이 넣어도 되나보다. {$translate = function}
    /*app.config.globalProperties.$translate = (key) => {
      return key.split('.').reduce((o, i) => {
        // reduce는 return한 값이 재귀적으로 다시 o에 들어가게 된다. 처음에는 options initial value로 들어가게 되고.
        if (o) return o[i]
        return undefined
      }, options)
    }*/

    // 동적으로 처리할 부분들을 위해서 위의 코드에서 아래 코드처럼 한다.
    app.config.globalProperties.$translate = (key, params = {}) => {
      return key.split('.').reduce((o, i) => {
        // reduce는 return한 값이 재귀적으로 다시 o에 들어가게 된다. 처음에는 options initial value로 들어가게 되고.
        if (o) return o[i]
      }, options).replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
      // 정규식의 의미 : 중괄호가 있고 그 안에 문자가 하나 이상 있을때 {name}이 있으면 {name} <- match가 들어가게 되고 slice에 의해 name만 가지고 교체가 된다.
    }
  }
}