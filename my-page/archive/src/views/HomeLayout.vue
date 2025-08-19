<script setup>

defineProps({
  isSidebarClosed: Boolean
});

</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': isSidebarClosed }">
    <div class="text">Dashboard Sidebar</div>
  </section>
</template>


<style>
</style>
