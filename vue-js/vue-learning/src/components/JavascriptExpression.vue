<template>

    <!-- .Vue파일을 컴파일할때 {{}} 안의 내용은 Javascript Code로 인지해서 출력한다. 즉 연산이 가능하다  -->
    <span> {{number + 100}}</span>

    <br>

    <span> {{ ok ? '예' : '아니오' }} </span>

    <br>

    <span> {{ message.split('').reverse().join('')}}</span>


    <!-- 이번에는 v-로 시작하는 디렉티브 속성 내부에서 보도록 하겠다-->

    <!-- ""내부가 javascript code가 쓰인다-->
    <div :id="ok ? 'listId' : 'listGoodId'">안녕하세요2</div>

</template>


<script>

export default{

    name: 'JavascriptExpression',

    setup(){

        const number = 100;
        const ok = 0; //1있으니까 true 0 없으니까 false
        const message = "안녕하세요";

        return{
            number,
            ok,
            message,
        }
    }

}

/*
참고
    <!-- 이것은 표현식이 아니라 선언식입니다: -->
    {{ var a = 1 }}

    <!-- 흐름 제어도 작동하지 않습니다. 삼항 표현식을 사용하십시오. -->
    {{ if (ok) { return message } }}

    각 바인딩에는 하나의 단일 표현식만 포함될 수 있습니다. 표현식은 값으로 평가할 수 있어야 하는 코드 조각입니다. 쉽게 말해 return 뒤에 사용할 수 있는 코드여야 하는 것입니다.

*/

</script>


<style>
#listGoodId{
    color: blue;
}

</style>