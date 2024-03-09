<template>
  <div>
    <!-- v-directive는 v-directive:속성 = "javascript code"<- 마지막이 value라는데 결국 script에서 받아오는 변수나 함수를 의미하게 됨   -->
    <p v-if="seen"> 볼 수 있나? </p>
    <br>
    <p v-show="seen"> 볼 수 있나? </p>
    <br>
    <!-- 함수 호출 부분에서 괄호를 제거 -->
    <button @click="doing"> {{ value1 }} </button>

    <!--Container 안에 내용을 명시해준다. tag.textContent를 update하는 효과와 같다.-->
    <p v-text="content"></p>

    <br><br>

    <!--v-once 한 번만 rendering된다 그 이후 수정이 되어도 더 이상 재 rendering되지 않는다 변하지 않는 내용이라면 -> update 성능 최적화 가능 -->
    <p v-once> {{ message }} </p>
    <button @click="changeMessage">try to change message </button>


  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DirectiveMethod',
  setup() {
    const value1 = ref(10);
    const textContent = 'good contnent';
    const message = ref('first-message');

    const doing = () => {
        //Javascript code에서는 ref 반응형 상태에 대해서 .value가 필요하다. 템플릿에서는 편의상 .value가 나올수 있게 해준것.
      value1.value++;
    };

    const changeMessage= () =>{
      message.value = 'hi';
    }

    return {
      seen: true,
      value1,
      doing,
      textContent,
      message,
      changeMessage
    }
  },
}
</script>

<style>
</style>
