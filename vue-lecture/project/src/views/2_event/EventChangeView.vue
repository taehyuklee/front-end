<template>
  <div>
    <!-- Change가 가장 많이 발생하는 tag : checkbox, input type radio, select -->
    <!-- 도시를 선택할때마다 아파트 동호수가 바껴야 하므로 @change (v-on:)이벤트를 등록해준다 -->
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">==도시 선택==</option>
      <!-- 실수 포인트 : v-bind:value 안하고 그냥 value="city.cityCode"를 넣어버림. javascript 데이터에 mapping이 안됨 -->
      <option :value="city.cityCode" :key="city.cityCode" v-for="city in cityList">{{ city.title }}</option>
      <!-- <option value="" :key="city.cityCode" v-for="city in cityList">{{ city.title }}</option> -->
    </select> <!-- 아파트 --> <br>
    <select name="" id="">
      <option value="" :key="dong.dongCode" v-for="dong in selectedDongList">{{ dong.dongTitle }}</option>
      <!-- <option value="dong.dongCode" :key="dong.dongCode" v-for="dong in selectedDongList">{{  }}</option> -->
    </select> <!-- 위의 아파트에 따라 다랄지는 동/호수 --> <br>
    <select name="" id="">
      <!-- 실제로는 filter를 써서 아래와 같이 직접 filter를 적용해도 된다. 어차피 반환은 List이므로 이때는 실제로 change Event가 필요 없다 -->
      <option value="" :key="dong.dongCode" v-for="dong in dongList.filter((dong) => selectedCity === dong.cityCode)">{{ dong.dongTitle }}</option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울 1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울 2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울 3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울 4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산 1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산 2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산 3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주 1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주 2동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      // for (let i; i < this.dongList.size; i++) {
      //   if(dongList[i].cityCode == )
      // }
      // select의 v-model은 option의 value와 이어져 있다.
      // for (let i = 0; i < this.dongList.length; i++) {
      //   // console.log(this.dongList[i].cityCode)
      //   console.log(this.selectedCity)
      //   if (this.selectedCity === this.dongList[i].cityCode) {
      //     console.log(this.selectedCity)
      //     // console.log(this.dongList[i].cityCode)
      //     this.selectedDongList.push(this.dongList[i])
      //   }
      // }
      console.log(event.target.tagName) // event가 전달되는 것을 확인할 수 있다.
      this.selectedDongList = this.dongList.filter((dong) => {
        console.log(dong)
        console.log(this.selectedCity)
        return dong.cityCode === this.selectedCity
      })
      console.log(this.selectedCityList)
    }
  }
}
</script>
