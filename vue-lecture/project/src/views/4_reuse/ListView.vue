<template>
  <div class="container">
    <!-- bootstrap의 경우 이미 css js가 있기때문에 class로 받아와서 적용하게 된다. -->
    <button class="btn btn-primary me-1" @click="doSearch">조회</button> <!-- me-1 : margin end -->
    <button class="btn btn-danger" @click="doDelete">삭제</button>

    <simple-grid selectedType="checkbox"
     :headers="headers"
     :items="drinkList"
      checkedKey="drinkId"
      @change-item="changeCheckdValue"
      ></simple-grid>
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
      drinkList: [],
      // 자식 component에서 $emit으로 check할때마다 전달되는 items를 받아와야 한다.
      checkedItems: []
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
      // 삭제 실행 - 삭제할 아이템 에 대한 제품 번호 this.checkedItems
      for(let i=0; i<this.drinkList.length; i++){
        for(let j=0; j<this.checkedItems.length; j++){
          if(this.drinkList[i].drinkId == this.checkedItems[i][1]){
            this.drinkList.remove(drinkList[i])
          }
        }
      }
    },
    changeCheckdValue(data) {
      console.log('선택된 아이템', data)
      // 자식 Component에서 check한 Item을 부모한테 전달해 주게 된다.
      this.checkedItems = data
    }
  }
}
</script>
