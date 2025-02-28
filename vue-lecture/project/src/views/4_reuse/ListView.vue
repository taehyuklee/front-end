<template>
  <div class="container">
    <!-- bootstrap의 경우 이미 css js가 있기때문에 class로 받아와서 적용하게 된다. -->
    <button class="btn btn-primary me-1" @click="doSearch">조회</button> <!-- me-1 : margin end -->
    <button class="btn btn-danger" @click="doDelete">삭제</button>

    <simple-grid selectedType="checkbox" :headers="headers" :items="drinkList"></simple-grid>
  </div>
</template>
<script>
import SimpleGrid from '@/components/fragments/SimpleGrid.vue'
export default {
  components: { SimpleGrid },
  data() {
    return {
      headers: [
        { title: '제품코드', key: 'drinkId' },
        { title: '제품명', key: 'drinkName' },
        { title: '제품가격', key: 'price' }
      ],
      drinkList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      this.drinkList = [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        },
        {
          drinkId: '3',
          drinkName: '커피',
          price: 500,
          qty: 1
        },
        {
          drinkId: '4',
          drinkName: '사이다',
          price: 1200,
          qty: 1
        }
      ]
    },
    doDelete() {
      //
    }
  }
}
</script>
