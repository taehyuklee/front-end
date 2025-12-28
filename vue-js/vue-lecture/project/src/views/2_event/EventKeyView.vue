<template>
  <div>
    <!-- Enter key를 가지고 버튼을 누르지 않더라도 되게 하기 위해서는 keyup event를 많이 사용함 -->
    <input type="search" name="" id="" v-model="searchText" @keyup="checkEnter($event)">
    <input type="search" name="" id="" v-model="searchText" @keyup.enter="doSearch"> <!-- keyup event에 enter가 존재한다 주요 key들은 다 등록해놓음 -->
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
// 기본적인 key들은 @keup v-on:keyup 에 다 등록되어 있따 [.enter, .tab, .delete, .esc, .space, .up, .down, .elft, .right]
// Evnet Bubbling, Propagation 등 다 존재함 [.stop - event.stopPropagation, .prevent - event.preventDefault()]
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      // enter누르면 13임 (event처리를 이렇게 하는거임)
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
