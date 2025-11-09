<script setup>
  import Header from '@/components/layout/Header.vue'
  import { useRoute } from 'vue-router'
  import { computed } from 'vue' 
  import { useUiStore } from '@/stores/ui';

  const uiStore = useUiStore(); // 전역 상태 가져오기 


  // const props = defineProps({
  //   isSidebarClosed: Boolean,
  //   isDark: Boolean
  // });


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
    },
    'CoinDashboard': {
      'title': 'Coin Dashboard',
      'subMenus': ['Chart Tools', 'Data Download']
    }

  }

  const currentHeader = computed( () => {
    console.log(route.name);
      // 정규식: 'Coin'으로 시작하는 라우트 이름
    if (/^Coin/.test(route.name)) {
      return {
        title: 'Coin Dashboard',
        subMenus: ['Chart Tools', 'Data Download']
      }
    }
    return headerConfig[route.name] || {title: "", subMenus: []}
  })

  // route.name에 따라 필요한 props만 내려주는 매퍼
  // isDark: props.isDark, isSidebarClosed: props.isSidebarClosed
  function getViewProps(name) {
    switch (name) {
      case 'MainHome':
        return {}
      case 'Dashboard':
        return {}
      case 'OpenAPIs':
        return {}
      case 'CoinDashboard':
        return {}
      default:
        return {}
    }
  }

</script>


<template>
  <section class="home" :class="{ 'sidebar-closed': uiStore.isSidebarClosed }">
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
