<template>
    <div>
      <div>{{ todos }}</div>
      <div>할일 목록 전체 수 : {{ todosCount }}</div>
      <div>완료 목록 수 : {{ doneTodosCount }}</div>
      <div>미완료 목록 수 : {{ notDoneTodosCount }}</div>
      <div>
        <label for="todo" class="form-label">할 일</label>
        <input type="text" name="" id="" class="form-control" v-model="todo">
        <button class="btn btn-primary" @click="addItem"> 추가 (mutation) </button>
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
          <tr :key = i v-for="(todo, i) in todos">
            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>{{ todo.done ? '완료' : '미완료' }}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" :checked="!todo.done" @change="doneYn(todo.id, $event)">
                <!-- :checked="todo.done" checked여부를 변수로 이어서 checked를 양방향으로 적용되게 한다 - 완료되면 비활성화 표시로-->
              </div>
            </td>
            <td><button class="btn btn-danger btn-sm" @click="removeItem(todo.id)">삭제</button></td>
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
      return this.$store.state.todos
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount
    },
    todosCount() {
      return this.$store.getters.todosCount
    },
    notDoneTodosCount() {
      return this.$store.getters.notDoneTodosCount
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    addItem() {
      // mutation의 method를 사용하기 위해서는 commit이란 keyword를 사용해야 한다.
      this.$store.commit('add', { id: 4, title: 'todo4', done: false })
    },
    removeItem(id) {
      this.$store.commit('remove', id)
    },
    doneYn(id, event) {
      this.$store.commit('doneYn', { id: id, done: !event.target.checked })
    }
  }
}
</script>
