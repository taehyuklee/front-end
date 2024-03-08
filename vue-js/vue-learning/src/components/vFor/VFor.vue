<template>
    <ul>
        <!-- Reactive가 아니어도 되긴 한다.-->
        <li v-for="item in items" :key="item">
            인덱스: {{ item.message }}
        </li>

        <br>

        <!-- Reactive 반응상태를 쓰는건 나중에 update때문에-->
        <li v-for="item in refItems" :key="item">
            인덱스: {{ item.message }}
        </li>

        <br>
        <!-- Reactive 반응상태중 filtering된 것만 받아오기 여기서는 짝수만-->
        <li v-for="item in evenItems" :key="item">
            인덱스 filtering: {{ item.message }}
        </li>

        <br>
        <!-- 객체에서 key, value, index 따로 받아오기 이건 분해 할당?? Python과 매우 비슷. -->
        <li v-for="(value, key, index) in myObject" :key="key">
            인덱스: {{ index }} - {{ key }} - {{ value }}
        </li>

    </ul>
</template>


<script>
import {reactive, computed} from 'vue';

export default{

    setup(){ //setup <- steup으로 되어 있었음

        //const items = ref(["hi", "shot", "shoot"]);

        // const items = ref([{key: "a"}, {key: "b"}, {key: "c"}]);

        // const items = [{key: "a"}, {key: "b"}, {key: "c"}];

        // const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);

        // v-for는 key : value 값으로 되어 있어야 한다. List<Object> 형태여야 한다.
        const items = [
            {id: 1, message: 'Java'},
            {id: 2, message: 'HTML'},
            {id: 3, message: 'CSS'},
            {id: 4, message: 'JavaScript'},
        ];

        const refItems = reactive([
            {id: 1, message: 'Java'},
            {id: 2, message: 'HTML'},
            {id: 3, message: 'CSS'},
            {id: 4, message: 'JavaScript'},
        ]);

        //array API filter (Java의 stream API랑 비슷하네 map, reduce, filter, some, every)
        const evenItems = computed(() => {
            return refItems.filter(item => item.id %2 ===0);
        })

        //Object
        const myObject = reactive({
            title: '제목',
            author: '홍길동',
            publishedAt: '2024-03-08'
        })


        return{
            items,
            refItems,
            evenItems,
            myObject
        };
    }
}


</script>


<style>

</style>