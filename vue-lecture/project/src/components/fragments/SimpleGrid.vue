<template>
  <div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th v-if="selectedType==='checkbox'"><input type="checkbox" class="form-check-input"/></th>
          <th :key="th.key" v-for="th in headers"> {{ th.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(item, i) in items">
          <td v-if="selectedType==='checkbox'"><input type="checkbox" class="form-check-input" /></td>
          <td v-else-if="selectedType==='radio'"><input type="radio" class="form-check-input"/></td>
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
    }
  },
  data() {
    return {
      sampleData: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
