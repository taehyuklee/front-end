<template>
  <div>
    <!-- Radio 버튼이란 여러개 모델중 하나만 선택할 수 있게 한 것이 라디오버튼이다 -->
    <div>
      <input type="radio" name="" id="html" value="HTML.Value" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="" id="css" value="CSS.Value" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="radio" name="" id="js" value="JS.Value" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // Radio는 하나만 선택이므로 배열이 아니라 문자열로 받아와야한다.
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
