<template>
  <div>
    <div>{{ todos }}</div>
    <div>할일 목록 전체 수 : {{ todosCount }}</div>
    <div>완료 목록 수 : {{ doneTodosCount }}</div>
    <div>미완료 목록 수 : {{ notDoneTodosCount }}</div>
    <div>
      <label for="todo" class="form-label">할 일</label>
      <input type="text" name="" id="" class="form-control" v-model="todo" />
      <button class="btn btn-primary" @click="addItem">추가 (mutation)</button>
      <button class="btn btn-primary" @click="addItem2">추가 (action)</button>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Todo ID</th>
          <th>할 일</th>
          <th>완료여부</th>
          <th>완료여부 스위치</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(todo, i) in todos">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.done ? '완료' : '미완료' }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                :checked="!todo.done"
                @change="doneYn(todo.id, $event)"
              />
              <!-- :checked="todo.done" checked여부를 변수로 이어서 checked를 양방향으로 적용되게 한다 - 완료되면 비활성화 표시로-->
            </div>
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="removeItem(todo.id)">
              삭제
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    todos() {
      // module로 정의해놓으면 그 안에 key에 한 번 더 접근해야하므로 todo(key)를 한 번 더 호출함.
      // return this.$store.state.todos (before)
      return this.$store.state.todo.todos
    },
    // getters에 접근하는건 좀 다른 방식이다
    doneTodosCount() {
      // return this.$store.getters.doneTodosCount
      // 위에서 아래로 바꿔야 한다 module에 들어가 있을때는 getters['{namespace}/{getters-method}']
      return this.$store.getters['todo/doneTodosCount']
    },
    todosCount() {
      return this.$store.getters['todo/todosCount']
    },
    notDoneTodosCount() {
      return this.$store.getters['todo/notDoneTodosCount']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      // mutation의 method를 사용하기 위해서는 commit이란 keyword를 사용해야 한다.
      // this.$store.commit('add', { id: 4, title: 'todo4', done: false })
      // actions에서도 마찬가지로 앞에 todo라고 하는 namespace를 넣어줘야 한다.
      this.$store.commit('todo/add', { id: 4, title: 'todo4', done: false })
    },
    removeItem(id) {
      this.$store.commit('todo/remove', id)
    },
    doneYn(id, event) {
      this.$store.commit('todo/doneYn', { id: id, done: !event.target.checked })
    },
    // 위에서는 mutation을 이용한거고 그 아래는 action을 이용하기 위해 dispatch를 이용해야 한다.
    addItem2() {
      this.$store.dispatch('todo/add', { id: 4, title: 'todo4', done: false })
    }
  }
}
</script>
