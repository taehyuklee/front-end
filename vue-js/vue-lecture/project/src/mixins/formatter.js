// Vue 파일 mixins 속성 안에 해당 formmater.js 파일을 import해서 넣으면, 해당 속성과 병합된다. created끼리, mounted끼리 <mixin 파일 먼저 실행된다>
export default {
  created() {
    console.log('formatter의 created')
  },
  mounted() {
    console.log('formatter의 mounted')
    // 서버 데이터베이스 현재 시간/분/초, 사용자 아이디, 현재 라우트 패스
    // 현재의 route path를 확인하고 싶으면 아래와 같이 $route.path를 찍어보면 된다.
    console.log(this.$route.path)
  },
  methods: {
    // mixin Vue파일에서 헷갈리지 말라고 관례적으로 .js에 있는 method의 이름 앞에 $를 붙여 사용한다.
    $convertDateFormat(d, f) {
      let year = ''
      let month = ''
      let day = ''
      // '20220601'
      // Date() 객체 둘중 뭐가 들어오든 처리할 수 있는 것을 만들거다.
      if (typeof d === 'string' && d.length === 8) {
        year = d.substring(0, 4)
        month = d.substring(4, 6)
        day = d.substring(6, 8)
      } else if (typeof d === 'object') {
        year = d.getFullYear()
        month = (d.getMonth() + 1).toString().padStart(2, 0)
        day = (d.getDate() + 1).toString().padStart(2, 0)
      }

      // f = 'YYYY-MM-DD' 'MM-DD-YYYY'
      return f.replace('YYYY', year).replace('MM', month).replace('DD', day)
    }
  }
}
