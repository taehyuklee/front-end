<template>
  <div>
    <label for="">태어난 도시는?</label>
    <select name="" id="">
      <option id="" name="" :value="city.code" v-bind:key="city.code" v-for="city in cities">
        {{ city.title }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      cities: [],
      fnInterval: null
    }
  },
  props: {

  },
  // Vue가 Component를 생성할때 알아서 해당 Component의 아래 method들을 호출해준다. (Composition API)
  setup() {},
  // 인스턴스가 초기화되면 props까지 처리한다. data까지는 아직 처리가 안됨 (computed와 같은 option들을 처리하기 이전임)
  // 인스턴스가 초기화되면 props 설정을 처리한 후 data() 또는 computed 같은 다른 옵션을 처리하기 직전의 단계임
  beforeCreate() {},

  // * data(), watch, computed, methods 이런 정보를 모두 가지고 준비가 끝난 상태 (아직 화면에 나오기 이전) * 많이 사용
  created() {
    // 이때 데이터 정보를 저장할때 이때쯤에 양이 많은 api들은 먼저 데이터를 넣어준다.
    this.getCityList()
  },

  // 반응 상태 설정을 완료를 했지만 - 연결을 다 해놓음, 아직 DOM 노드가 생성되지 않은 시점. (dom 그리기 직전)
  beforeMount() {},

  // * 실제 DOM이 랜더링이 끝난 상태. 끝난 이후 mounted가 호출됨. * 많이 사용
  mounted() {
    // 보통 화면의 켜짐과 동시에 데이터를 가져와야 하는 경우 여기에서 mount시켜 놓는다. (DOM Rendering이 끝난 상태기때문에 이미 화면이 구성이 되어 있는 상태)
    // DOM이 구성된 이후에 데이터를 mount시키는건 만약 해당 API가 느리다면, 껌뻑하면서 나타나는 경우가 있다. 사용자 입장에서 유쾌하지는 않음. 사용자가 먼저 봐야하는 데이터 (위의 데이터) => created에 분할해서 API호출
    // this.getCityList()
    this.fnInterval = window.setInterval(() => {
      console.log('aaaa')
    }, 1000)
  },

  // 데이터 변경으로 인해 DOM을 업데이트 하기 직전 상태.
  beforeUpdate() {},

  // 데이터 변경으로 인해 DOM이 업데이트 되고 난 직후.
  update() {},

  // 현재 Component를 빠져 나가기 직전.
  beforeUnmount() {},

  // * 현재 컴포넌트를 빠져 나갈 때 실행이 된다. * 많이 사용
  unmounted() {
    // mount에서 무한 반복되던걸 Router로 다른 component에 갈때 해제해주고 가야한다.
    window.clearInterval(this.fnInterval)
    this.fnInterval = null
    // 기존에 데이터를 GC대상으로 만들어준다. stack과 heap을 끊어내는 작업. (성능적인 측면)
    this.cities = null
  },
  methods: {
    getCityList() {
      this.cities = [{ code: '02', title: '서울' }]
    }
  }
}
</script>
