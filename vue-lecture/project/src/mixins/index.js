// 실무에서는 index.js에 많이 사용되는 것들을 모두 모아둔다고 한다.
import axios from 'axios'
export default {
  created() {
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    async $get(url) {
      return (await axios.get(url).catch(e => {
        console.log(e)
      })).data
    },
    async $post(url, data) {
      return (await axios.post(url, data).catch(e => {
        console.log(e)
      })).data
    },
    async $put(url, data) {
      return (await axios.put(url, data).catch(e => {
        console.log(e)
      })).data
    },
    async $delete(url) {
      return (await axios.delete(url).catch(e => {
        console.log(e)
      })).data
    },
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
    },
    // 달러 등 숫자 변환기
    // #,###
    // #,###.## : 3400.1 -> 3,400.1
    // #,###.#0 : 3400.1 -> 3,400.10
    // #.###,## <- 유럽의 경우 소수점과 정수를 바꿔서 쓰기도 한다는데 이해가 안가네.
    // $#,###.## : 3400.1 -> $3400.1
    $convertNumberFormat(amount, format) {
      let currencySymbol = ''
      let lastSymbol = ''

      if (format.substring(0, 1) !== '#') {
        currencySymbol = format.substring(0, 1)
      }
      // 즉, 단위가 붙었을때 원이라던자 #.###.##원 <- 이런식으로 format이 들어왔을때
      if (format.slice(-1) !== '#' && format.slice(-1) !== '0') {
        lastSymbol = format.slice(-1)
        // 여기서 %와 같은 것들이 있을때 그걸 빼고 format을 재정의 해줘야 한다
        format = format.substring(0, format.length - 1)
      }

      // 숫자 3자리마다 구분자 기호
      let groupingSeparator = ''

      // 소수점 구분자 기호
      let decimalSeparator = ''

      // 소수점 몇자리까지 표기할건지
      let maxFractionDigits = 0

      if (format.indexOf('.') === -1) {
        // 위의 indexOf로 .의 위치를 찾는데 없으면 -1을 내뱉으므로 소수점이 없다면
        // 이 케이스는 '#,###' 이 케이스를 의마한다.
        groupingSeparator = ','
      } else if (format.indexOf(',') === -1) {
        groupingSeparator = '.'
      } else if (format.indexOf(',') < format.indexOf('.')) {
        // #,###.##
        groupingSeparator = ','
        decimalSeparator = '.'
        // 전체 자리에서 .의 위치 빼기
        maxFractionDigits = format.length - (format.indexOf('.') + 1)
      } else {
        // #.###,## (유럽?)
        groupingSeparator = '.'
        decimalSeparator = ','
        maxFractionDigits = format.length - (format.indexOf(',') + 1)
      }

      let sign = ''
      let dec = 1

      // 여기서 원하는 format에 맞춰 작업한다. 위에서는 사전 정보작업
      for (let i = 0; i < maxFractionDigits; i++) {
        dec = dec * 10
      }

      // 이 부분 반올림을 굳이 이렇게 했어야 했는지는 이해가 안간다.
      let v = String(Math.round(parseFloat(amount) * dec) / dec)

      // sign이 -이면 sign -임을 저장하고 +이면 그냥 빈 ''을 넣는다.
      if (v.startsWith('-')) {
        sign = '-'
        v = v.substring(1)
      }

      // 정수든, 부동소수점이든 상관 없이 무조건 소수점 이하 자리수 맞춰주는 곳 (to fix에서 알아서 반올림되는데 왜 위에서..)
      if (maxFractionDigits > 0 && format.slice(-1) === '0') {
        v = parseFloat(v).toFixed(maxFractionDigits)
      }

      let d = '' // 소수점 이하면 분리해서 넣을 것
      if (maxFractionDigits > 0 && v.indexOf('.') > -1) {
        d = v.substring(v.indexOf('.')) // .24가 들어가게 된다 d에는
        d = d.replace('.', decimalSeparator) // .이 만약 다른 , 이런거면 -> decimalSeparator ,24로 바뀐다.
        v = v.substring(0, v.indexOf('.')) // 3500 정수부분
      }

      // 여기서부터 세자리마다 , 붙여주기 (정규식 이용)
      // 3500 => 3,500
      const regexp = /(\d+)(\d{3})/

      // v = 3524500
      while (regexp.test(v)) {
        // $1 = 3524
        // $2 = 500
        // 3524 + ',' + 500 => 3524,500
        // next while
        // 3524 => 3,524
        v = v.replace(regexp, '$1' + groupingSeparator + '$2')
      }

      return sign + currencySymbol + v + d + lastSymbol
    }
  }
}
