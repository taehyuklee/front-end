<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction();">클릭</button>
    <button @click="changeData();">변경</button>
    <br>
    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num2" /> =
    <span></span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'taehyuk-lee',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      // Vue에서는 function이라는 keyword를 쓸 필요가 없다.
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'Taehyuk-Lee'
    }
  }
}
</script>
