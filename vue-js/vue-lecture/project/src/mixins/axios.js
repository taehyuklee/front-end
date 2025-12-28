// axios는 서버랑 통신하는 library이다. GET/PUT/POST/DELETE 등의 Method를 지원하고 있다. 이걸 전역으로 등록해서 어느 페이지에서든 사용할 수 있게 하면 좋을 듯
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
    }
  }
}
