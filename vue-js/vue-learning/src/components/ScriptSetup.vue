<template>

    <!-- 템플릿에서 ref를 사용할 때 .value를 추가할 필요가 없었습니다. 편의상 ref는 템플릿 내에서 사용될 때 자동으로 언래핑됩니다-->
    <div @click="increment"> {{ count }} </div>
</template>


<script setup>

//이전에 setup(){ return obj} 형태를 통해서 템플릿에 상태, 메서드를 노출했다. 여기서 <script setup>을 사용하면 return을 하지 않고 단순화 할 수 있다. 

import {ref} from 'vue'

//이 ref는 primitive type에만 쓰이고 object에는 reactive()가 사용된다.
const count = ref(0);

function increment(){
    count.value++
}

/* 
 공식문서에서 내가 궁금해 하던 Why Refs가 적시되어 있다. 
 ref로 wrapping된 상태(변수)는 Vue가 추적이 가능해서 추후에 변경이 되더라도 DOM에서 그 해당 부분만 변경이 가능하다고 한다. 
 하지만, 일반 JavaScript에서는 일반 변수의 접근이나 변형을 감지하는 방법이 없다. 
 
 ref에서의 .value속성은 Vue에게 ref가 액세스되거나 변경되었을때 감지할 수 있게 해준다. 내부적으로 Vue는 getter에서 추적을 수행하고 setter에서 트리거를 수행한다.

*/


</script>

<style>

</style>