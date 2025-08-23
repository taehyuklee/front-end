<script setup>

import QuillEditor from '@/components/widgets/Editor.vue'

defineProps({
  isSidebarClosed: Boolean
});

</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': isSidebarClosed }">
    <div class="text">Dashboard Sidebar

      <QuillEditor theme="bubble" />

    </div>
  </section>
</template>


<style>
</style>
