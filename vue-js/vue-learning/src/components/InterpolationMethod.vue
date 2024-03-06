<template>

    <h1> {{ msg }} </h1>

</template>


<script>

import { ref } from 'vue'

export default{

    name: 'InterpolationMethod',

    setup(){

        const msg = ref("Hellow World, Welcome");

        return{
            msg
        }
    }
}

</script>


<style>


</style>
