<template>
  <div>
    <div>
        <input type="text" name="" id="" v-model="firstName">
        <input type="text" name="" id="" v-model="lastName">
    </div>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <p> {{ title }} {{ firstName }}, {{ lastName }}</p>
    <div>
      <select name="" id="" v-model="selected">
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
    </div>
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
      selected: '',
      changeHistory: []
    }
  },
  watch: {
    // watch는 어떤 한 data값의 변화를 감시하고 (Observe) 변경되면 이벤트 발생을 하게 된다.
    // watch의 함수 이름은 변수명으로 선언하면 된다.(Proxy와 Callback을 이용해서 구현가능 하다)
    firstName(newValue, oldValue) {
      // 어떤 값에서 어떤 값으로 변했는지를 추적할 수 있다.
      console.log('oldValue', oldValue)
      console.log('newValue', newValue)
      console.log(this.firstName)
    },
    // 이번에는 위의 select를 변경할때마다 뭘 변경했는지를 changeHistory에서 관리해볼 것이다. (사용자의 History를 추적할 수 있다)
    // 사용자의 Pattern 데이터를 추출할 수 있는 방법.
    selected(newValue, oldValue) {
      this.changeHistory.push(newValue)
      console.log(this.changeHistory)
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
