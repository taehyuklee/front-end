<template>
  <div>
    <button @click="changeValue"> 변경 </button>
    <!-- <ChildComponent></ChildComponent> -->

    <!-- 아래와 같이 쓰일수도 있다 -->
    <!-- <child-component str='개발자의 품격'></child-component> -->
    <child-component
      v-bind:str='strParent'
      v-bind:num='numParent'
      :isOk="isOkParent"
      :arr="arrParent"
      :obj="objParent"
      @change-num="getData"
      ref="child1"> <!-- Custom event를 만들어 사용할 수 있다. 브라우저에서 제공하는 이벤트 말고도 직접 만들어서 -->
      <!-- id는 vue에서 사용하는건데, 마치 html의 id와 같은거다 -->
    </child-component>
  </div>
</template>
<script>
import ChildComponent from '@/components/fragments/ChildComponent.vue'
export default {
  components: { ChildComponent },
  // components: {"chid-com": ChildComponent} 이렇게 쓰면 해당 key명으로 쓰면 된다. 이렇게 정의 안할경우 자동으로 명으로 key가 설정된다.
  data() {
    return {
      sampleData: '',
      strParent: '고개발자의 품격',
      // v-bind빼버리면 문자로 넘어갈 가능성이 있따 num='5' 이런식으로 하면
      numParent: 12,
      // boolean도 "true" 이런식으로 쓰면 안되고 바인딩 해줘야 boolean값으로 들어가게 된다
      isOkParent: true,
      arrParent: [1, 2, 3, 4, 5],
      objParent: { name: 'Taehyuk' }
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getData(data) {
      console.log('자식 컴포넌트에서 이벤트 호출')
      console.log(data)
    },
    changeValue() {
      this.$refs.child1.str2 = 'Seoul'
      // this.$refs (ref에 등록되어 있는 애들중 위의 child1을 찾아온다. 즉, 해당 Vue 객체를 받아오게 되는건데, 여기서 자식 Component의 데이터에 접근 가능하다.
      // 즉, 위에서 this.$refs.child1. 은 자식 입장에서 this. 까지 접근한거랑 같다. 위에서 Jeju로되어 있던걸 Seoul로 바꿔보겠다.
      this.$refs.child1.printMessage() // 이렇게 함수 접근
    }
  }
}
</script>
