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
import { ref } from 'vue'
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
    // reactive라고 해도 되지만, ref로 해도 된다. 사용법이 살짝 다르다고 한다.
    const state = ref({
      num1: 0,
      num2: 0,
      result: 0
    })

    // reactive와 ref의 차이점 설명 : reactive는 object나 array만 반응형이 된다 일반 primitive type은 반응형이 안됨
    // const n = reactive(5) 이건 반응형이 되지 않는다. ref(5)로 해줘야 한다. ref는 전부다 반응형을 만들 수 있다.

    function plusNumber2() {
      // ref로 감싸면 해당 객체의 value에 해당 값이 저장되어 있다. 아래와 같이 표현해줘야 한다.
      state.value.result = state.value.num1 + state.value.num2
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
