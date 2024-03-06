<template>
    <!-- 속성 바인딩 -->
    <span v-bind:id="dynamicId"> 메시지: </span>

    <br>

    <!-- 단축 문법 -->
    <span :id="dynamicId2"> 메시지2: </span>

    <br>

    <!-- Boolean Binding - 속성값이 기존의 true false가 아닌 truthy, falsy가 된다.-->
    <button :disabled="boolVal"> 버튼 </button>

    <br>

    <!-- Object로 속성들을 정의해서 한 번에 옮겨줄수 있다 이때 v-bind통째로 쓰게 되어 있다 -->
    <span v-bind="obj_property"> </span>

</template>


<script>

export default{

    name: 'VBinding',

    setup(){

        const obj_property = {
            id: "obj_id",
            class: "obj_class"
        }

        return{
            //setup윗부분에 변수정의 하지 않고 바로 Object로 전달한다.
            dynamicId: 'spanId',
            dynamicId2: 'spanId2',
            boolVal: false, //falsy의 값 대표적으로 0, false 이 존재, trutyh의 값 대표적으로 1, true가 존재
            obj_property
        }
    }

}
</script>


<style>

#spanId{
    color:red;
}

#spanId2{
    color: blue;
}

</style>
