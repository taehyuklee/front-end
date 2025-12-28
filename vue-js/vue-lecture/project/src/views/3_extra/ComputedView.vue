<template>
  <div>
    <div>
        <input type="text" name="" id="" v-model="firstName">
        <input type="text" name="" id="" v-model="lastName">
    </div>
    <h1> {{ fullName }} </h1>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <p> {{ fullName }} </p>
    <div>
      <label for="age"></label>
      <input type="number" name="" id="age" v-model="age">
    </div>
    <p>{{ age >= 20? '성인': '미성년자' }}</p>
    <p>{{ isAudlt }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Mr.',
      age: 0
    }
  },
  computed: {
    // 함수로 미리 계산해 놓는거를 (많이 사용하는 함수) 실시간으로 계속 반응형이 된다.
    fullName() {
      return this.title + ' ' + this.firstName + ', ' + this.lastName
    },
    isAudlt() {
      return this.age >= 20 ? '성인' : '미성년자'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
