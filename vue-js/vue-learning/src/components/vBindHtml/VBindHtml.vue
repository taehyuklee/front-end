<template>

    <!--앞서 v-bind를 사용하면 tag의 속성들 값을 binding할 수 있다고 했다. 특이하게 class의 경우 bind와 일반 class가 공존 가능하다.-->
    <div class="text" :class="{active: isActive, 'text-danger': hasError}"> 텍스트 입니다.</div> 
    <!--여기서 binding속성은 Object로 뭉탱이로 가져올 수 있음을 기억하자 하지만 여기서는 좀 다른게 class에만 Object로 가져왔네? class = a b 이런거랑 같은 의미인가? 맞음
    위에서는 class = text isActive text-danger 랑 같은 의미가 됨 (단지 여기서 토글로 isActive는 없앨수가 있음)-->
    <button @click="toggle_button">toggle</button>


</template>


<script>

import {ref} from 'vue';

export default{
    
    setup(){
        
        const isActive = ref(true);
        const hasError = ref(false);

        /* 이렇게 Object로도 한 번에 넣을 수 있다
        const classObj = reactive({
            active: true,
            'text-dnager': true,
        })
        */



        const toggle_button = () =>{
            isActive.value = !isActive.value;
        }

        return{
            isActive,
            toggle_button,
            hasError,
        }
    }


}

</script>


<style>

.text-danger{
    color: blue;
}
</style>