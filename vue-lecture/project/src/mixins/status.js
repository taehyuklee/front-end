// 사용자 한 명 한 명이 어떤 Component에 들렸다 나왔는지 사용자 패턴을 저장할 수 있다.
export default {
  created() {
  },
  mounted() {
    // 서버 데이터베이스 현재 시간/분/초, 사용자 아이디, 현재 라우트 패스를 서버 데이터베이스에 저장하는 역할을 하는 mixin (logging용)
    // 현재의 route path를 확인하고 싶으면 아래와 같이 $route.path를 찍어보면 된다.
    // Component에 들어오는 시점에 logging
    console.log(this.$route.path)
  },
  unmounted() {
    // Component를 빠져나가는 시점에 logging
    console.log(this.$route.path)
  },
  methods: {}
}

