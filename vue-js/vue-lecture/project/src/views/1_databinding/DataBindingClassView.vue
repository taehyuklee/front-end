<template>
  <div>
    <!-- class 속성은 특이하게 object를 받아올수 있다. 여러개의 class를 가져올 수 있다는 특징도 있고 해서 아래와 같이 표현하게 되었다 -->
    <div :class="{'text-red': hasError, active: isActive}"> 클래스 바인딩 </div>
    <!-- class Binding 배열 형태로 할당. 실무에서는 사실상 객체형태로 더 많이 사용한다 -->
    <div :class="class2"> 클래스 바인딩 </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.active {
  background-color: greenyellow;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
