<template>
  <div>
    <div>
      <select name="" id="">
        <option value=""></option>
        <option value="city.code" :key="city.code" v-for="city in cities"> {{ city.title }} </option>
      </select>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
            <tr :key="drink.drinkId" v-for="drink in drinkList">
              <td>{{ drink.drinkId }}</td>
              <td>{{ drink.drinkName }}</td>
              <td>{{ drink.price }}</td>
              <td><input type="number" name="" id="" v-model="drink.qty"></td>
              <td>{{ drink.price * drink.qty }}</td> <!--앞서 v-model 양방향 모델 쓸때는 애시당초 text로 받아왔기때문에 -->
            </tr>
            <!-- 만약 유일한 key 값으로 쓰일만한 것이 없다면, v-for="(drink, i) in drinkList" 라고 해서 i를 key값으로 넣어주면 된다-->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
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
          drinkName: '오렌지주스',
          price: 1200,
          qty: 1
        }
      ]
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
