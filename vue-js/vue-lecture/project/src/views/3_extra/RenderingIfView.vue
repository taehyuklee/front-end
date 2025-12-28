<template>
  <div>
    <!--Vue에서 특정 html tag를 사라지고 나타나게 하는 것을 해보려고 한다. -->
    <!-- 상황 설명 : 권한에 따라 Super User는 조회 생성 삭제만 가능하고 일반 사용자는 조회나 생성만 가능하다 -->
    <div>
      <div v-if="userRole === 'A'">
        <button>조회</button>
        <button>생성</button>
        <button>삭제</button>
      </div>
      <div v-else-if="userRole === 'M'">
        <button>조회</button>
        <button>생성</button>
      </div>
      <div v-else>
        <button>조회</button>
      </div>
      <!-- <button v-if="userRole ==='A' || userRole === 'M' || userRole ==='G'">조회</button>
      <button v-if="userRole ==='A' || userRole === 'M'">생성</button>
      <button v-if="userRole === 'M'">삭제</button> -->
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userRole: 'A' // A(Admin) - 관리자, M(Manager) - 매니저, G(General) - 일반 사용자
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
