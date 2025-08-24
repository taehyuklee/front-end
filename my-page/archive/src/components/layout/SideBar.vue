<script setup>
    //import HelloWorld from './components/HelloWorld.vue'
    // import {ref} from 'vue' //결론적으로 ref를 감싸야 vue에서 인식 가능 template에서
    // import '@/components/layout/style.css'

  // vue-router는 메뉴를 클릭했을때 다른 menu로 가게 하기 위해 사용하는 객체임
  import { useRouter } from 'vue-router'

  const router = useRouter()

  defineProps({
    isSidebarClosed: Boolean,
    isDark: Boolean
  })

  // defineEmits를 해서 emit을 정의해야한다. template에 직접 반영하기 위해서는 $emit()으로 전달해야 한다.
  const emit = defineEmits(['toggle-sidebar','toggle-dark'])


  function toggleSidebar() {
    // emit할때 첫 번째 인자는 Custom Event명 , 두번째 인자부터는 data를 의미하게 됨.
    emit('toggle-sidebar', 'change of sidebar')
  }

  function toggleDark() {
    emit('toggle-dark', 'change of dark')
  }

  function goToMenu(path) {
    // $router가 변경할 component 또는 View로 routing해준다. (path에 맞춰서) - router에 등록된 component로 path만을 가지고 이동.
    // this.$router.push({ path: path }) options api 형태
    router.push({ path: path })
  }

</script>

<template>
    <!-- <div class="box"></div> -->
    <nav :class= "{ sidebar: true, close: isSidebarClosed}">
      <header>
        <div class="image-text">
          <span class="image">
            <img src="@/assets/my-logo.png" alt="">
          </span>

          <div class="text logo-text">
            <span class="name">Open APIs</span>
            <span :class="{ profession: true, close: isSidebarClosed }">for my service</span>
          </div>
        </div>

        <!-- <i class='bx bx-chevron-right toggle' @click="$emit('toggle-sidebar')"></i> -->
        <i class='bx bx-chevron-right toggle' @click="toggleSidebar" ></i>
      </header>

      <div class="menu-bar">
        <div class="menu">

          <li class="search-box">
            <i class='bx bx-search icon'></i>
            <input type="text" placeholder="Search">
          </li>

          <ul class="menu-links">
            <li class="nav-link">
              <a href="#" @click.prevent="goToMenu('/home/')">
                <i class='bx bx-home-alt icon'></i>
                <span class="text nav-text">Home</span>
              </a>
            </li>

            <li class="nav-link" @click.prevent="goToMenu('/dashboard/')">
              <a href="#">
                <i class='bx bx-bar-chart-alt-2 icon'></i>
                <span class="text nav-text">Dashboard</span>
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
                <span class="text nav-text">Oepn APIs</span>
              </a>
            </li>
<!-- 
            <li class="nav-link">
              <a href="#">
                <i class='bx bx-heart icon'></i>
                <span class="text nav-text">Likes</span>
              </a>
            </li> -->

            <li class="nav-link">
              <a href="#">
                <i class='bx bx-wallet icon'></i>
                <span class="text nav-text">Coins-Topics</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="../index.html">
                <!-- icon이라 붙이면 해당 크기가 원상복구 됨. -->
                <i class='bx  bx-chevrons-left icon'  ></i> 
                <span class="text nav-text">Back To Main</span>
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

            <!-- <div class="toggle-switch" @click="$emit('toggle-dark')"> -->
            <div class="toggle-switch" @click="toggleDark">
              <span class="switch"></span>
            </div>
          </li>

        </div>
      </div>

    </nav>

</template>

<style scoped>

/* bootstrap css와의 충돌때문에 넣은 css */
.menu ul {
  margin: 0;       /* 브라우저 기본 margin 제거 */
  padding: 0;      /* 브라우저 & Bootstrap padding 제거 */
  list-style: none; /* 점 없애기 */
}

.profession.close {
  visibility: hidden;   /* 공간은 유지하면서 안 보임 */
}



</style>
