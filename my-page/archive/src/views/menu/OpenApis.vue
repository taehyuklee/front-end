<script setup>
import ImgTable from '@/components/widgets/ImgTable.vue';
</script>


<template>
  <div class="text">
    <div class="view_title">OpenAPIs List</div>
    <img-table></img-table>
  </div>
</template>


<style scoped>
    .text {
        padding: 12px 60px;
    /* padding: 12px 60px; */ /* 원래 이거임 */
    }
    .view_title{
      margin-bottom: 20px;
    }
</style>