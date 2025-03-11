<template>
  <div>
    <h2>Calculator</h2>
    <br />
    <div>
      <input type="text" v-model.number="num1" />
      <span>+</span>
      <input type="text" v-model.number="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
import { plusNumber2 } from '@/api/common'

// 원래는 아래 함수도 여기에서 했지만 이걸 따로 밖으로 뺀거
// import { ref, computed, toRefs } from 'vue'
// function plusNumber2() {
//   const state = ref({
//     num1: 0,
//     num2: 0,
//     result: computed(() => state.value.num1 + state.value.num2)
//   })

//   // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서 toRefs를 사용해야함. toRef도 있는데 이건 한 값만 보내는거.
//   return toRefs(state.value) // state.value를 전달해줘야 그 안에 내용을 전달하게 된다.
// }

export default {
  components: {},
  data() {
    return {
      //   num1: 0,
      //   num2: 0,
      //   result: 0
    }
  },
  // Composition API
  // 컴포지션 API (setup내에서 구현한다)
  setup() {
    const { num1, num2, result } = plusNumber2() // 외부 함수
    return {
      num1,
      num2,
      result
    }
  },
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
