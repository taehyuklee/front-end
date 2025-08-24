<script setup>
import Header from '@/components/layout/Header.vue'
import { useRoute } from 'vue-router'

defineProps({
  isSidebarClosed: Boolean
});

// App의 전체 정보를  singleton처럼 관리된다.
const route = useRoute()


const headerConfig = {
  'dashboard': {
    'title': 'Dashboard',
    'subMenus': ['item1', 'item2', 'item3']
  },
  'open_apis': {
    'title': 'OpenAPIs',
    'subMenus': ['item4', 'item5', 'item6']
  },
  'notification': {
    'title': 'Notification',
    'subMenus': ['item7', 'item8', 'item9']
  }

}

console.log(route.name)


</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': isSidebarClosed }">
    <Header/>
    <div class="text">

      <div class="container"> 
        <router-view/>
      </div>
      <!-- <QuillEditor theme="bubble" /> -->

    </div>
  </section>
</template>


<style scoped>
</style>
