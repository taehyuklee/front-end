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
    'subMenus': ['main_item1', 'main_item2', 'main_item3']
  },
  'Dashboard': {
    'title': 'Dashboard',
    'subMenus': ['dashboard1', 'dashboard2', 'dashboard3']
  },
  'OpenAPIs': {
    'title': 'OpenAPIs',
    'subMenus': ['open_apis1', 'open_apis2', 'open_apis3']
  },
  'Notification': {
    'title': 'Notification',
    'subMenus': ['notification1', 'notification2', 'notification3']
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
