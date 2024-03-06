<template>

    <!-- v-if 속성 : 아예 DOM으로 Rendering하지 않는다. -->
    <p v-if="seen"> 볼 수 있나? </p>


    <br>
    <!-- v-show : DOM으로 Rendering은 해놓고 Painting여부만-->
    <p v-show="seen"> 볼 수 있나? </p>

    <br>
    <button @click="doing(value)"> {{ value }} </button>

</template>


<script>

import { ref } from 'vue'

export default{

    name: 'DirectiveMethod',

    setup(){

        const value = ref(10);

        return{
            seen: true,
            value
        }
    },

    methods: {
        doing(value){
            console.log("하위");
            console.log(value);
            value++;
            console.log(value);
            return value++;
        }
    }

}

</script>


<style>


</style>
