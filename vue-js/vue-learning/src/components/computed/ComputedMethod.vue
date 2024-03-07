<template>
    
    <p> 책을 가지고 있다: - 일반 함수를 부르면 아래 countBook() 이 불릴때마다 연산이 들어간다. </p>
    <span>{{ countBook() }}</span>
    <span>{{ countBook() }}</span>
    <span>{{ countBook() }}</span>

    <p> 책을 가지고 있다: - computed 함수는 caching해서 넣어놓기 때문에 불릴때마다 연산이 들어가지 않는다.</p>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>
    <span>{{ computedCountBook }}</span>


</template>


<script>

import { reactive, computed } from 'vue';

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

        return{
            author,
            countBook,
            computedCountBook,

        }
    },

}

</script>


<style>

</style>