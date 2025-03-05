<template>
    <div>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Show Modal</button>
        <SlotModal></SlotModal>
    </div>
</template>

<script>
import SlotModal from '@/components/fragments/SlotModal.vue'
export default {
  components: { SlotModal },
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
