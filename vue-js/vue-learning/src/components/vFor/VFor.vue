<template>
    <ul>
        <!-- <li v-for="item in items">
            {{ item.key }}
        </li> -->

        <li v-for="item in items" :key="item">
            {{ item.message }}
        </li>
    </ul>
</template>


<script>
import {ref} from 'vue';

export default{

    steup(){

        //const items = ref(["hi", "shot", "shoot"]);

        // const items = ref([{key: "a"}, {key: "b"}, {key: "c"}]);

        // const items = [{key: "a"}, {key: "b"}, {key: "c"}];

        const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);

        return{
            items,
        }
    }
}


</script>


<style>

</style>