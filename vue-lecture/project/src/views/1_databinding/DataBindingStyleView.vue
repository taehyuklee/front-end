<template>
  <div>
    <div style="color:red; font-size:30px">스타일 바인딩: 글씨는 red, 폰트크기는:30px</div>
    <div :style="style1">스타일 바인딩: 글씨는 red, 폰트크기는:30px</div>
    <button @click="style1.color = 'blue'"> 생상바꾸기 </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      style1: { // style은 아래와 같이 object로 속성을 입힐수 있다.
        color: 'green',
        fontSize: '30px'
      }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
