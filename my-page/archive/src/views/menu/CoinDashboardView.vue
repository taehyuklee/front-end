<script setup>
import * as echarts from 'echarts/core';

</script>

<template>
  <div id="common_body">
    <div class="text">
      <div class="view_title">Coin Dashboard</div>
        <img-table
          :headers="headers"
          :items="items">
        </img-table>
      </div>
    </div>

</template>

<style scoped>
    .text {
        padding: 12px 60px;
    /* padding: 12px 60px; */ /* 원래 이거임 */
    }
</style>