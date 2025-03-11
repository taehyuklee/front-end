import { createStore } from 'vuex'
import { todo } from './todo'

export default createStore({
  modules: {
    // modules에 등록할때 key 부분이 내가 todo.js에 등록해 놓은 namespace이다.
    todo: todo
  }
})
