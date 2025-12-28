import { ref, computed, toRefs } from 'vue'

function plusNumber2() {
  const state = ref({
    num1: 0,
    num2: 0,
    result: computed(() => state.value.num1 + state.value.num2)
  })

  // 반응형으로 선언된 num1, num2, result가 외부 function에서 정상적으로 동작하기 위해서 toRefs를 사용해야함. toRef도 있는데 이건 한 값만 보내는거.
  return toRefs(state.value) // state.value를 전달해줘야 그 안에 내용을 전달하게 된다.
}

export { plusNumber2 }
