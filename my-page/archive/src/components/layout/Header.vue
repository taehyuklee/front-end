<script setup>

    defineProps({
        title: {
            type: String,   // 문자열
            required: true
        },
        subMenus: {
            type: Array,    // 배열
            default: () => []  // 기본값 빈 배열
        },
        isDark: {
            type: Boolean,
            required: true
        }
    })


</script>

<template>
    <div>
        <nav id="header_nav">
            <h3 id="header_title"> {{ title }} </h3>
            <ul id="nav_ul">

                <li v-for="(submenu, index) in subMenus" :key="index">
                    <a href="#">{{ submenu }}</a>
                </li>
                <!-- <li>
                    <a href="#"> 공지 사항 </a>
                </li>
                <li>
                    <a href="#"> 공지 사항1 </a>
                </li>
                <li>
                    <a href="#"> 공지 사항2 </a>
                </li> -->
            </ul>
        </nav>
    </div>
</template>

<style scoped>

#header_nav {
    padding: 0px 0px 0px 10px; 
    font-weight: 500;
    color: var(--header-text-color);
    background-color: var(--header-color);
    transition: var(--tran-05);
    padding: 20px 60px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

#title {
    font-size: 25px;
}

#nav_ul {
    display: flex;        /* 한 줄로 나열 */
    margin: 0;
    padding: 20px 0px 0px 0px; /* padding: top right bottom left; */
    list-style: none;     /* 기본 점 제거 */
    gap: 100px;            /* 항목 간 간격 */
    align-items: center;  /* 세로 가운데 정렬 */
}

#nav_ul li a {
    text-decoration: none; /* 밑줄 제거 */ 
    font-size: 15px;
    color: var(--header-text-color);
    padding: 0px 0px 0px, 0px;
    display: block;
    text-shadow: 6px 4px 5px rgba(0,0,0,0.3); /* 그림자 적용 */
    /* filter: drop-shadow(1.5px 1.5px 10px rgb(0, 42, 70)); */
    transition: color 0.3s ease, 
              text-shadow 0.3s ease; /* 색상과 그림자 부드럽게 변화 */
}

/* hover 시 색상 변경 */
#nav_ul li a:hover {
    color: rgb(255, 80, 80);
    filter: drop-shadow(3px 3px 5px rgb(158, 158, 158));
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3); /* 그림자 적용 */
}

</style>