<template>
    
    <!-- memo안에 있는 특정 반응형 상태 여기서는 subscribers가 바뀌었을때만 전체가 반응하게 된다 
    성능 최적화가 필요할때 사용한다고 한다? 예를 들어?-->
    <div v-memo="[subscribers]">
        <p>subscribers: {{ subscribers }}</p>
        <p>views: {{ views }}</p>
        <p>likes: {{ likes }}</p>
    </div>
    <button @click = "subscribers++">Subs</button>
    <button @click = "views++">View</button>
    <button @click = "likes++">Likes</button>

    <br>
    <br>
    <br>

    <div>
        <p>subscribers: {{ subscribers }}</p>
        <p>views: {{ views }}</p>
        <p>likes: {{ likes }}</p>
    </div>


</template>


<script>
import {ref} from 'vue';

export default{

    setup(){
        const subscribers = ref(4000);
        const views = ref(400);
        const likes = ref(40);

        return{
            subscribers,
            views,
            likes,
        }
    }

}

</script>


<style>

</style>