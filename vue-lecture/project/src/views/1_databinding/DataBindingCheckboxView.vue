<template>
  <div>
    <!-- Checkbox를 하나의 그룹으로 묶기 위해서는 name똑같이하면 묶인다 -->
    <div>
      <input type="checkbox" name="" id="html" value="HTML.Value" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS.Value" v-model="favoriteLang">
      <label for="css">CSS</label>
    </div>
    <div>
      <input type="checkbox" name="" id="js" value="JS.Value" v-model="favoriteLang">
      <label for="js">JavaScript</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      // 여기서 v-model과 같은 binding은 변수와 연결시켜주는 거라 생각하면 된다. 결국 그 안에 내용이 양방향 바인딩이 되는 것이므로 value가 양방향 바인딩이라 생각하면 된다.
      // 하지만 CheckBox의 경우 value를 바꿀수 있는게 아니고 check여부만 바꿀수 있다. 즉 input에서 checkbox type의 경우 checked속성과 양방향 binding이 되는 것이다.
      // 그리고 해당 checked된 것들만 favoriteLang List에 넣어주게 된다.
      // Checkbox는 기존에는 원래의 같은 name으로 여러 개 값을 선택할수 있듯이, v-model도 여러개 선택할 수 있게 []형태로 주는게 맞다.
      // 반대로 배열에 value 값을 보고 checked directive를 반영한다 (양방향 바인딩 대상)
      favoriteLang: ['JS.Value']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
