<script setup>
    //import HelloWorld from './components/HelloWorld.vue'
    import {ref} from 'vue'
    // import '@/components/layout/style.css'

    //
    const isSidebarClosed = ref(true);
    // dark모드는 꺼놓음
    const isDark = ref(false);

    // toggle 하나만 Vue Style로 바꿔보자.
    function isToggleSidebar() {
      isSidebarClosed.value = !isSidebarClosed.value;
    };

    function isDarkMode() {
      isDark.value = !isDark.value;

    }
    

    // const body = document.querySelector('body'),
    //   sidebar = body.querySelector('nav'),
    //   toggle = body.querySelector(".toggle"),
    //   searchBtn = body.querySelector(".search-box"),
    //   modeSwitch = body.querySelector(".toggle-switch"),
    //   modeText = body.querySelector(".mode-text");
    
    // toggle.addEventListener("click", () => {
    //   sidebar.classList.toggle("close");
    // })

    // searchBtn.addEventListener("click", () => {
    //   sidebar.classList.remove("close");
    // })

    // modeSwitch.addEventListener("click", () => {
    //   body.classList.toggle("dark");
    //   if (body.classList.contains("dark")) {
    //     modeText.innerText = "Light mode";
    //   } else {
    //     modeText.innerText = "Dark mode";
    //   }
    // });
</script>

<template>
  <div id="body" :class="{dark: isDark}">

    <div class="box"></div>
    <nav :class= "{ sidebar: true, close: isSidebarClosed}">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/my-logo.png" alt="">
          </span>

          <div class="text logo-text">
            <span class="name">Open APIs</span>
            <span class="profession">for my service</span>
          </div>
        </div>

        <i class='bx bx-chevron-right toggle' @click="isToggleSidebar" ></i>
      </header>

      <div class="menu-bar">
        <div class="menu">

          <li class="search-box">
            <i class='bx bx-search icon'></i>
            <input type="text" placeholder="Search Ganes...">
          </li>

          <ul class="menu-links">
            <li class="nav-link">
              <a href="#">
                <i class='bx bx-home-alt icon'></i>
                <span class="text nav-text">Dashboard</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-bar-chart-alt-2 icon'></i>
                <span class="text nav-text">Revenue</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-bell icon'></i>
                <span class="text nav-text">Notifications</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-pie-chart-alt icon'></i>
                <span class="text nav-text">Analytics</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-heart icon'></i>
                <span class="text nav-text">Likes</span>
              </a>
            </li>

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-wallet icon'></i>
                <span class="text nav-text">Wallets</span>
              </a>
            </li>

          </ul>
        </div>

        <div class="bottom-content">
          <li class="">
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
            
            <span class="mode-text text">{{ isDark ? 'Light mode' : 'Dark mode' }}</span>

            <div class="toggle-switch" @click="isDarkMode">
              <span class="switch"></span>
            </div>
          </li>

        </div>
      </div>

    </nav>

  <section class="home">
    <div class="text">Dashboard Sidebar</div>
  </section>
  </div>
</template>

<style scoped>

</style>
