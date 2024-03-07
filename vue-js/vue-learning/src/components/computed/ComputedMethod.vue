<template>
    
    <p> 책을 가지고 있다: - 일반 함수를 부르면 아래 countBook() 이 불릴때마다 연산이 들어간다. </p>
    <span>{{ countBook() }}</span>
    <span>{{ countBook() }}</span>
    <span>{{ countBook() }}</span>

    <br><br>

    <!-- 차이점은 계산된 속성은 의존된 반응형을 기반으로 캐시된다는 점입니다. 계산된 속성은 의존된 반응형 중 일부가 변경된 경우에만 재평가됩니다.-->
    <p> 책을 가지고 있다: - computed 함수는 caching해서 넣어놓기 때문에 불릴때마다 연산이 들어가지 않는다.</p>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>

    <br><br>

    <p> 책을 가지고 있다: - computed 함수는 caching해서 넣어놓기 때문에 불릴때마다 연산이 들어가지 않는다.</p>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>


</template>


<script>

import { ref, reactive, computed } from 'vue';

export default{

    name: 'ComputedMethod',

    setup(){

        const author = reactive({
            name: 'John Doe',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 = The Mystery'
            ]
        })

        //일반 함수
        const countBook = () => {
            console.log("countbook");
            return author.books.length >0 ? 'Yes' : 'No';
        }

        //computed 함수 computed() method로 감싸면 마찬가지로 reactive로 객체화 된다.
        const computedCountBook = computed(() => {
            console.log("Computed countbook");
            return author.books.length >0 ? 'Yes' : 'No';
        });

        //이 또한 Proxy객체로 감싸여 있을텐데 어떻게 .value를 수정할 수 있을까? -> .value=값을 억지로 넣으면 readOnly라는 에러가 뜬다 

        const fullName = computed(() => {
            const firstName = ref("Lee");
            const lastName = ref("Taehyuk");

            return lastName.value + firstName.value; //javascript code에서는 ref로 감싸질경우 proxy객체에서 .value속성을 받아와야 한다 거기에 값이 있기때문에 
        })

        console.log(fullName.value);


        //위에서처럼 한수 안에서 하는게 아니라 객체에서 직접 하는것이기때문에 여기서 정의하고 객체에 넣어줘야 한다 아래에서
        //firstName : ref("Lee"); 이런식으로 쓰면 그 아래 scope에서는 위에서 변수가 정의되어 있는게 아니기에 알지 못한다. undefined뜸
        const firstName = ref("Lee");
        const lastName = ref("Taehyuk");

        //아래와 같이 getter와 setter를 사용하면 computed객체로 감싸여 있어도 수정이 가능하다. computed로 감싸서 get, set을 override하게 되면 .value로 값을 바꾸면 알아서 setter를 사용하게 된다.
        const modifyFullName = computed({
            get(){
                return lastName.value + ' ' + firstName.value;
            },

            set(value){
                console.log(fullName.value);
                [lastName.value, firstName.value] = value.split(' '); //구조분해 할당이라 하는데 <- 이거는 사실상 Python하고 비슷하게 돌아가네
            }
        })

        console.log(modifyFullName.value);


        return{
            author,
            countBook,
            computedCountBook,
            fullName,
            modifyFullName,

        }
    },

}

</script>


<style>

</style>