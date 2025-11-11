<script setup>
import { useRouter } from 'vue-router'
import { useUiStore } from '@/stores/ui'
import 'boxicons/css/boxicons.min.css'


const router = useRouter()
const uiStore = useUiStore() // store 사용

function goToMenu(path) {
  router.push({ path })
}
</script>

<template>
  <nav :class="{ sidebar: true, close: uiStore.isSidebarClosed }">
    <header>
      <div class="image-text">
        <span class="image">
          <img src="@/assets/my-logo.png" alt="">
        </span>
        <div class="text logo-text">
          <span class="name">Open APIs</span>
          <span :class="{ profession: true, close: uiStore.isSidebarClosed }">for my service</span>
        </div>
      </div>

      <i class='bx bx-chevron-right toggle' @click="uiStore.toggleSidebar"></i>
    </header>

    <div class="menu-bar">
      <div class="menu">
        <li class="search-box">
          <i class='bx bx-search icon'></i>
          <input type="text" placeholder="Search">
        </li>

        <ul class="menu-links">
          <li class="nav-link">
            <a href="#" @click.prevent="goToMenu('/')">
              <i class='bx bx-home-alt icon'></i>
              <span class="text nav-text">Home</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#" @click.prevent="goToMenu('/notification/')">
              <i class='bx bx-bell icon'></i>
              <span class="text nav-text">Notifications</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#" @click.prevent="goToMenu('/open_apis/')">
              <i class='bx bx-pie-chart-alt icon'></i>
              <span class="text nav-text">Open APIs</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="#" @click.prevent="goToMenu('/coin_chart/')">
              <i class='bx bx-pie-chart-alt icon'></i>
              <span class="text nav-text">Coin Dashboard</span>
            </a>
          </li>
          <li class="nav-link">
            <a href="../index.html" target="_self">
              <i class='bx bx-chevrons-left icon'></i>
              <span class="text nav-text">Back To Main</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="bottom-content">
        <li>
          <a href="#">
            <i class='bx bx-log-out icon'></i>
            <span class="text nav-text">Logout</span>
          </a>
        </li>

        <li class="mode">
          <div class="sun-moon">
            <i class='bx bx-moon icon moon'></i>
            <i class='bx bx-sun icon sun'></i>
          </div>

          <span class="mode-text text">{{ uiStore.isDark ? 'Light mode' : 'Dark mode' }}</span>

          <div class="toggle-switch" @click="uiStore.toggleDarkMode">
            <span class="switch"></span>
          </div>
        </li>
      </div>
    </div>
  </nav>
</template>

<style scoped>
  .menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .profession.close {
    visibility: hidden;
  }
</style>
