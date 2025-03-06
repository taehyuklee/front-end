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
    }
  }
}
