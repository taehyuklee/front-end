<script setup>
import Header from '@/components/layout/Header.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue' 

defineProps({
  isSidebarClosed: Boolean
});

// App의 전체 정보를  singleton처럼 관리된다.
const route = useRoute()


const headerConfig = {
  'MainHome': {
    'title': 'MainHome',
    'subMenus': []
  },
  'Dashboard': {
    'title': 'Dashboard',
    'subMenus': ['Statistics', 'User Management', 'Logs']
  },
  'OpenAPIs': {
    'title': 'OpenAPIs',
    'subMenus': ['API List', 'Documentation', 'Requests']
  },
  'Notification': {
    'title': 'Notification',
    'subMenus': ['Messages', 'Events', 'Settings']
  }

}

const currentHeader = computed( () => {
  console.log(route.name);
  return headerConfig[route.name] || {title: "", subMenus: []}
})


</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': isSidebarClosed }">
    <Header :title="currentHeader.title" :sub-menus="currentHeader.subMenus"/>
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
