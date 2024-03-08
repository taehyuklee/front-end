<template>
    <h1 v-if="isActive1">Hi Front-End</h1>

    <!--v-else 엘리먼트는 v-if 또는 v-else-if 엘리먼트 바로 다음에 와야 합니다. 그렇지 않으면 인식되지 않습니다.-->
    <h1 v-else-if="isActive2===true"> Hi Back-end</h1>
    <h1 v-else-if="isActive3===true"> Hi DevOps</h1>
    <h1 v-else> Hi FullStacks</h1>

    <button @click="awesome = !awesome">전환</button>

    <h1 v-if="awesome">Vue는 정말 멋지죠!</h1>
    <h1 v-else>아닌가요? 😢</h1>

    <!--v-show-->

    <h1 v-show="isActive===true"></h1>
</template>

<script>
import {ref} from 'vue';

//실습해 볼 것은 v-if, v-else-if, v-else관련해서 구현해 볼것이며 
export default{

    setup(){

        //지금 내가 착각했던게 true, false boolean type이 아닌 그냥 'true', 'false' string type으로 해놓고 왜 안되지 이러고 있었음.

        // const isActive1 = ref('false');
        // const isActive2 = ref('false');
        // const isActive3 = ref('false');

        //v-show와 비교해 볼 것이다. 아래처럼 ref()로 감싸지 않아서 들어가지 않았던건가..

        return{
            // isActive1: 'false',
            // isActive2: 'false',
            // isActive3: 'false'
            isActive1: ref(false),
            isActive2: ref('false'), //문자열
            isActive3: ref('false'),
            // isActive1,
            // isActive2,
            // isActive3,
            awesome: ref('true'),
        }
    }
}





//참고로 v-if는 아예 DOM Rendering이 되지 않고 v-show는 rendering이 되지만 css display show를 하지 않는 것 뿐이다.


//그리고 일반 js로 v-if, v-else-if, v-else를 구현해보자.

</script>

<style>

</style>