<template>
  <div>
    <!-- 이 값들은 부모가 자식에게 데이터를 넘겨준 것 -->
    <p> {{ str }} </p>
    <p> {{ str2 }} </p>
    <p> {{ num }} </p>
    <p> {{ isOk }} </p>
    <p> {{ arr }} </p>
    <p> {{ obj }} </p>
    <!-- 여기서는 자식이 부모에게 데이터를 전달하는 것을 다루고 있다 -->
    <select name="" id="" v-on:change="callParent" v-model="selectedNum">
      <option :value="num" :key=i v-for="(num, i) in arr">{{ num }}</option>
    </select>
    <button @click="callParent">버튼</button>
    <!-- 위에서는 이벤트가 발생했을때인거고 실제로 프로그램 레벨에서 어떤 값이 저장되었는지를 알고싶은거야 -->
  </div>
</template>
<script>
export default {
  // props는 부모 component에서 자식 component에게 데이터를 전달할때 사용된다.
  props: {
    str: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      defualt: 0
    },
    isOk: {
      type: Boolean,
      default: false
    },
    arr: {
      type: Array,
      default: function() {
        // Array는 default값을 []로 받을수 없다.
        return []
      }
    },
    obj: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  components: {},
  data() {
    return {
      selectedNum: 1,
      str2: 'Jeju'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    callParent() {
      // this.$emit(); $emit을 통해 custom event를 정의할 수 있다.
      this.$emit('change-num', this.selectedNum)
    },
    normalCallParent() {
      console.log('hi')
    },
    printMessage() {
      console.log('printMessage')
    }
  }
}
</script>
