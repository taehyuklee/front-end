<script setup>
    //import HelloWorld from './components/HelloWorld.vue'

    import SideBar from '@/components/layout/SideBar.vue';
    import HomeView from '@/views/HomeLayout.vue';
    import {ref} from 'vue' 

    const isSidebarClosed = ref(true);
    const isDark = ref(false);

    function toggleSidebar(payload) {
      console.log(payload)
      isSidebarClosed.value = !isSidebarClosed.value;
      // 처음에  isSidebarClosed.value = !isSidebarClosed; 이렇게 돼서 다시 안닫힘. emit과 props 이벤트 전파 등
    }

    function toggleDarkMode(payload) {
      console.log(payload)
      isDark.value = !isDark.value;
    }

</script>

<template>

  <div id="body" :class="{dark: isDark}">
    <SideBar 
      :is-dark="isDark"
      :is-sidebar-closed="isSidebarClosed"
      @toggle-sidebar="toggleSidebar"
      @toggle-dark="toggleDarkMode"
      />
    <!-- </Sidebar> -->
    <HomeView :is-sidebar-closed="isSidebarClosed"/>
  </div>

</template>

<style scoped>

</style>
