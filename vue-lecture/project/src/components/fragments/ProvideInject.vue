<template>
  <div>
    <p>{{ size }}</p>
    <p>{{ str }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  // 아래 데이터를 어디서 보내주는지 props에 비해 확인하기가 어렵다. (props는 바로 부모 컴포넌트니까 직관적이다)
  inject: ['size', 'str'],
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
