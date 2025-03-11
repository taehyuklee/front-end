import { createStore } from 'vuex'
import { todo } from './todo'
import { user } from './user'
import persistedsatae from 'vuex-persistedstate'

export default createStore({
  modules: {
    // modules에 등록할때 key 부분이 내가 todo.js에 등록해 놓은 namespace이다.
    todo: todo,
    user: user
  },
  // 영구적으로 저장하고 싶은 state를 넣으면 된다. 예를 들어 todo namespace안에 todos를 저장하고 싶다.
  // Browser에서의 Local Storage (최대 5mb)까지 저장할수 있게 해준다. todo.todos를 저장하게 됨 이렇게 설정하면. (webapi이다)
  // detail: local storage안에 vuex (key) value에 저장되게 된다. )
  // [문제점: 영구적으로 남으면 문제가 되는 경우가 있다 - 로그아웃해도 남아 있으므로 쿠키가 필요한 케이스 - 시간 지정해서 일정 시간이 지나면 지워지게 해야함.]
  plugins: [persistedsatae({ paths: ['todo.todos'] })]
})
