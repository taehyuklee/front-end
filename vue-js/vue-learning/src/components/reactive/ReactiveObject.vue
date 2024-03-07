<template>

    <!-- 템플릿에서 ref를 사용할 때 .value를 추가할 필요가 없었습니다. 편의상 ref는 템플릿 내에서 사용될 때 자동으로 언래핑됩니다-->
    <div> {{ state }} </div>

    <div>{{ state1 }}</div>
</template>


<script setup>

import {reactive} from 'vue'

//여기서는 객체를 반응형으로 두기 위해 reactive()를 통해서 wrapping함. reactive를 통해 만든 객체는 JavaScript Proxy객체 (즉, Proxy 패턴을 이용한듯해 보인다)
//앞서 ref와 shallowRef의 차이처럼 일반적인 reative()는 심층적으로 변화한다. - shallowReactive()가 존재함.
//특히 객체의 reactive는 내부에 속성값으로 ref() 상태를 가질수도 있고 또 다른 reactive를 가질수도 있다. 내부 깊숙히까지 반응형일수 있다.
const state1 = reactive({
    count:0,
    unCount:0,
    notCount:0
});

//reactive사용시 primitive가 아니니까 변수는 stack에 instance는 heap에 저장되므로 연결이 끊기기 쉽다 예를 들어 
let state = reactive({count: 0 });
state = reactive({count: 1}); //이때 count:0에 관련된 객체는 더 이상 반응성이 남아있지 않다 끊김.
//웬만해서 ref사용하라고 하긴 하네.

</script>

<style>

</style>