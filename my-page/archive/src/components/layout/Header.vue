<script setup>

    defineProps({
        title: {
            type: String,   // 문자열
            required: true
        },
        subMenus: {
            type: Array,    // 배열
            default: () => []  // 기본값 빈 배열
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
    font-size: 30px;
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
    font-size: 20px;
    color: var(--header-text-color);
    padding: 0px 0px 0px, 0px;
    display: block;
}

</style>