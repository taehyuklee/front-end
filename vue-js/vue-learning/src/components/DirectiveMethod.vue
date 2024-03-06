<template>
  <div>
    <p v-if="seen"> 볼 수 있나? </p>
    <br>
    <p v-show="seen"> 볼 수 있나? </p>
    <br>
    <!-- 함수 호출 부분에서 괄호를 제거 -->
    <button @click="doing"> {{ value1 }} </button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DirectiveMethod',
  setup() {
    const value1 = ref(10);

    const doing = () => {
        //Javascript code에서는 ref 반응형 상태에 대해서 .value가 필요하다. 템플릿에서는 편의상 .value가 나올수 있게 해준것.
      value1.value++;
    };

    return {
      seen: true,
      value1,
      doing
    }
  },
}
</script>

<style>
</style>
