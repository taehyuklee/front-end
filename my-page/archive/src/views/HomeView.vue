<script setup>
import Header from '@/components/layout/Header.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue' 

const props = defineProps({
  isSidebarClosed: Boolean,
  isDark: Boolean
});

// App의 전체 정보를  singleton처럼 관리된다.
const route = useRoute()

const headerConfig = {
  'MainHome': {
    'title': 'MainHome',
    'subMenus': ['Introduction']
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

// route.name에 따라 필요한 props만 내려주는 매퍼
function getViewProps(name) {
  switch (name) {
    case 'MainHome':
      return { isDark: props.isDark }
    case 'Dashboard':
      return {}
    case 'OpenAPIs':
      return { isDark: props.isDark }
    default:
      return {}
  }
}

</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': props.isSidebarClosed }">
    <Header :title="currentHeader.title" :sub-menus="currentHeader.subMenus"/>
    <div class="text">

      <!-- <div class="container">  -->
      <div>
      <router-view v-slot="{ Component, route }">
        <component
          :is="Component"
          v-bind="getViewProps(route.name)"
        />
      </router-view>
      </div>
      <!-- <QuillEditor theme="bubble" /> -->

    </div>
  </section>
</template>


<style scoped>

</style>
