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
  'Home': {
    'title': 'Home',
    'subMenus': ['item1', 'item2', 'item3']
  },
  'Dashboard': {
    'title': 'Dashboard',
    'subMenus': ['item1', 'item2', 'item3']
  },
  'OpenAPIs': {
    'title': 'OpenAPIs',
    'subMenus': ['item4', 'item5', 'item6']
  },
  'Notification': {
    'title': 'Notification',
    'subMenus': ['item7', 'item8', 'item9']
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
