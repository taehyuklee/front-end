<template>
  <div>
    <!-- Vanilla JavaScript에서 event를 구현 할 수 있는 방법은 두 개 있다. 하나는 tag에 직접 넣는 onclick과 같은거, 두 번째는 addEventListener를 넣는것 -->
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    increaseCounter() {
      this.counter++
    }
  }
}
</script>
