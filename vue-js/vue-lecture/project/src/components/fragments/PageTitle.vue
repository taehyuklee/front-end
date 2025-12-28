<template>
  <h3> {{ title }} </h3>
  <!-- <div></div> -->
</template>
<script>
export default {
  components: {},
  props: {
    // 부모로부터 온 값을 전달해주는 값들
    // title: String 이와 같이 약식으로도 가능하지만, 아래있는 것처럼 구체적으로 하는게 좋다.
    title: {
      type: String,
      default: '페이지 제목'
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
