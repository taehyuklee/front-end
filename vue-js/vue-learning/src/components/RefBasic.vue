<template>

    <!-- 템플릿에서 ref를 사용할 때 .value를 추가할 필요가 없었습니다. 편의상 ref는 템플릿 내에서 사용될 때 자동으로 언래핑됩니다-->
    <div @click="increment"> {{ count }} </div>
</template>


<script>

import { ref } from 'vue';

export default{

    name: 'ReactiveBasic',

    setup(){

        const count = ref(0);

            
        console.log(count); //여기서 까보면 알겠지만 // {value:0} 
        /* ref()는 인수를 가져와서 .value 속성이 있는 ref 객체에 wrapping하여 반환한다. */

        function increment(){
            // Javascript에서 .value는 필요하다
            count.value++;
        }



        return{
            count,
            increment,
        }

    }

}

</script>

<style>

</style>