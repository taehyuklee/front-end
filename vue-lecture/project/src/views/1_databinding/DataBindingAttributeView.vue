<template>
  <div>
    <!-- 아래와 같이 readonly의 옵션이 있는데 양방향 binding이 된다면, 오히려 개발자도구로 웹상에서 바꾸게 되면 data가 변하는 현상이 일어나 문제가 된다 -->
    <input type="text" name="" id="" v-model="userId" readonly /> <br>
    <!-- 따라서 이럴때는 위와같이 v-model을 써서 양방향 바인딩을 하는 것이 아니라 value라는 속성에 값을 단방향 binding시킬 수 있다 -->
    <!-- 즉, 속성값에 직접 binding할 수 있게 해준다. 기존에 존재하는 속성값에 변수를 대입해줌으로써 값을 바꾸게 하는 것 -->
    <input type="text" name="" id="" v-bind:value="userId" readonly /> <br>
    <!-- 속성 값에 binding할때는 v-bind를 쓰는데, 이건 축약도 가능하다 :로 -->
    <input type="text" name="" id="" :value="userId" readonly /> <br>
    <!-- image 속성을 binding 해보겠다  src에 binding해보겠다 -->
    <img :src="imgSrc" alt="" style="width:100px; height:auto;"> <br>
    <input type="search" name="" id="" v-model="txt1"> <br>
    <button :disabled="txt1 === ''">조회</button> <!--옆에와 같이 연산자 또한 속성 안에서 작용한다-->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: '',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
