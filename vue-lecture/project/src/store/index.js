import { createStore } from 'vuex'

// Vuex는 모든 컴포넌트를 위한 중앙 집중식 저장소를 제공해 준다.
// 중앙 데이터 저장소에 저장된 데이터는 쉽게 바꿀 수 있는게 아니고,
// 특정 함수 (mutations, actions)를 통해서만 데이터 변경이 가능하고,
// 변경 상태를 관리할 수 있다.

export default createStore({
  // component의 data와 같다고 생각하면 된다.
  state() {
    // state는 중앙 데이터 저장소라 생각하면 된다.
    return {
      todos: [
        { id: 1, title: 'todo 1', done: true },
        { id: 2, title: 'todo 2', done: false },
        { id: 3, title: 'todo 3', done: false }
      ]
    }
  },
  // Store를 위한 computed라고 생각하면 됨.
  getters: {
    // 위의 예를 들어 내가 해야할 일중 총 한 일, 해야 할 일들 몇 건인지 계속해서 계산해놔야 하는게 있다.
    todosCount(state) {
      // getters에서 정의한 함수는 기본적으로 state를 가져온다. 위의 state를 의미한다
      return state.todos.length
    },
    doneTodosCount(state) {
      return state.todos.filter((todo) => todo.done).length
    },
    notDoneTodosCount(state) {
      return state.todos.filter((todo) => !todo.done).length
    }
  },
  // 상태(state)를 변경시킬 수 있는 유일한 방법(함수))
  mutations: {
    // mutations은 처음에 state를 무조건 받고 그 이후의 arguments는 사용하기 나름이다.
    add(state, item) {
      state.todos.push(item)
    },
    remove(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id)
    },
    done(state, id) {
      state.todos = state.todos.filter((todo) => todo.id === id)[0].done = true
    }
  },
  // mutations 하고 비슷한데,
  // actions에 정의된 함수에서 결국은 mutations에 정의한 함수를 커밋시켜서 state를 변경
  // 비동기 처리가 가능. (내가 해야할 목록 update한걸 서버 DB에 통신해야 한다. 이걸 위해서 비동기가 필요함 mutations는 메모리상의 업데이트임)
  actions: {
    add({ commit }, item) {
      // context.commit, context.state
      // javascript에서도 python의 unpacking과 같은 개념이 있다. object destruction
      // const {commit, state} = context
      // * context는 commit과 state 속성을 가지고 있고 위의 표현과 같이 하면 알아서 분배된다. 따라서 add(context) 대신해서 add({commit, state})이렇게 쓸수 있다.
      commit('add', item) // 이건 mutation에 있는 함수를 부르는 케이스
    }
    // 서버랑 통신. fetch, axios
    // add2: async ({commit}, item) => {
    //   await fetch('', {})
    // }
  },
  modules: {
  }
})
