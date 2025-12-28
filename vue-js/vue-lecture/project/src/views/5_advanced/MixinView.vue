<template>
  <div></div>
</template>
<script>
// Mixin은 중요하다고 생각하는 method를 미리 만들어 놓고 여러 Component나 View에서 공동으로 사용할 수 있게 된다.
// import Formatter from '@/mixins/formatter'
// import Axios from '@/mixins/axios'
export default {
  components: {},
  // main.js에 mixin을 전역으로 넣어놨기때문에 따로 mixins를 등록하지 않아도 사용 가능.
  // mixins: [Formatter, Axios],
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {
    console.log('MixinView의 created')
  },
  mounted() {
    console.log('MixinView의 mounted')
    console.log(this.$convertDateFormat('20220601', 'YYYY-MM-DD'))
    console.log(this.$convertDateFormat('20220601', 'MM.DD.YYYY'))
    // Mounted되는 시점에 이걸 넣음
    this.getCustomers()

    // Number Converter Test
    console.log(this.$convertNumberFormat(2547500, '#,###'))
    console.log(this.$convertNumberFormat(2547500, '#,###.#0'))
    console.log(this.$convertNumberFormat(2547500.4, '#,###.#0'))
    console.log(this.$convertNumberFormat(2547500.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-2547500.4, '#,###.##'))
    console.log(this.$convertNumberFormat(-2547500.4, '$#,###.##'))
    console.log(this.$convertNumberFormat(125.23, '#,###.#0%'))
    console.log(this.$convertNumberFormat(125.2, '#,###.#0%'))
  },
  unmounted() {},
  methods: {
    async getCustomers() {
      const customers = await this.$get('https://www.taylee.link/analysis/dataset-nm-by-user?userId=tae')
      console.log(customers)
    }
  }
}
</script>
