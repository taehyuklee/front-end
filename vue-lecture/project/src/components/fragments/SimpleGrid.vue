<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-if="selectedType==='checkbox'">
            <input type="checkbox"
              class="form-check-input"
              @change="checkAll($emit)"/>
            </th>
          <th v-else-if="selectedType==='radio'">
          </th>
          <th :key="th.key" v-for="th in headers"> {{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <!-- 보통 input type에서 value의 값은 서버로 보낼 값이라 생각하면 된다. : js랑 연결됨 지점 -->
          <td v-if="selectedType==='checkbox'">
            <input
              type="checkbox"
              class="form-check-input"
              :value="item[checkedKey]"
              v-model="checkedItems"
              @change="doChecked($emit)"
            />
          </td>
          <td v-else-if="selectedType==='radio'">
            <input
              type="radio"
              class="form-check-input"
              :value="item[checkedKey]"
              v-model="checkedItem"
              @change="doChecked($emit)"
              />
          </td>
          <!-- js에서 객체 접근은 아래와 같고 Map형태의 객체는 .get을 사용 가능 -->
          <td :key="th.key" v-for="th in headers">{{ item[th.key] }}</td>
        </tr>
        </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    items: {
      type: Array,
      default: function() {
        return []
      }
    },
    headers: {
      type: Array,
      default: function() {
        return []
      }
    },
    selectedType: {
      type: String,
      default: ''
    },
    checkedKey: {
      type: String,
      defautl: ''
    },
    checkedEventName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sampleData: '',
      // checkbox일때의 value값을 모으기 위함 : value가 v-bind된다 checkedItems변수에
      checkedItems: [],
      // radio일때의 value값을 표기하기 위함
      checkedItem: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doChecked(event) {
      // console.log(this.checkedItems)
      if (this.selectedType === 'checkbox') {
        this.$emit(this.checkedEventName, this.checkedItems)
      } else if (this.selectedType === 'radio') {
        this.$emit(this.checkedEventName, this.checkedItem)
      }
    },
    checkAll(event) {
      console.log(event.target.checked)
    }
  }
}
</script>
