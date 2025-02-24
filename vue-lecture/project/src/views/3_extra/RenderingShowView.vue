<template>
  <div>
    <input type="radio" name="" id="ai" value="AI" v-model="favoriteField">
    <label for="">인공지능</label>
    <input type="radio" name="" id="blockchain" value="BC" v-model="favoriteField">
    <label for="">블록체인</label>
    <input type="radio" name="" id="iot" value="IOT" v-model="favoriteField">
    <label for="">사물인터넷</label>
    <input type="radio" name="" id="other" value="OTH" v-model="favoriteField">
    <label for="">기타</label>
    <!-- v-show와 v-if 차이점 v-show는 DOM에 Rendering되어 있지만, style에서 display:false로 되어 있는 것 : v-if는 리페인팅 리플로우 과정을 거치게 된다 -->
    <!-- 반대로 v-if는 아예 Rendering이 되어 있지 않게 된다 DOM Tree에 아예 존재하지 않는다 -->
    <div v-show="favoriteField === 'OTH'">
      <input type="text" name="" id="">
    </div>
  </div>
  <!-- 앞서 사용자 권한에 따라 조회 생성 삭제에서는 권한이 바로 바뀔일이 없다 이런 경우는 그리고 보안상 tag에서 변경시켜서 사용이 가능해지므로 v-if로 아예 랜더링 시켜주지 않는다 -->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteField: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
