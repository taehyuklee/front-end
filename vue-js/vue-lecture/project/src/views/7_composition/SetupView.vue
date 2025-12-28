<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" @keyup="plusNumber" />
      <span>+</span>
      <input type="text" v-model.number="num2" @keyup="plusNumber" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
    <br />
    <div>
      <input type="text" v-model.number="state.num1" @keyup="plusNumber2" />
      <span>+</span>
      <input type="text" v-model.number="state.num2" @keyup="plusNumber2" />
      <span>=</span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    }
  },
  // Composition API
  // 컴포지션 API (setup내에서 구현한다)
  setup() {
    // setup부분에서 일반적 객체를 생성하면 반응형이 될수 없다. 서로 양방향 바인딩이 안됨. 그래서 reactive라는걸로 감싸서 반응형으로 만들어주는 것.
    // options api에서 data는 알아서 reactive가 됨.
    const state = reactive({
      num1: 0,
      num2: 0,
      result: 0
    })

    function plusNumber2() {
      state.result = state.num1 + state.num2
    }

    return {
      state,
      plusNumber2
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    plusNumber() {
      this.result = this.num1 + this.num2
    }
  }
}
</script>
