<script>
import { onBeforeMount, onMounted, ref } from 'vue';

export default{
  setup() {

    // 해당 부분은 Reactive관련해서 알아보고자 한 것. 
    const reactiveMessage = ref('Hello Reactive Message');
    const normalMessage = 'Hello Normal Message';

    const addReactiveMessage = () => {

      // ref로 감싸면 어떤 객체로 wrapping되나보다. .value로 아래 field를 받아오지 않으면 reactive 작동이 안됨. 
      reactiveMessage.value = reactiveMessage.value + '!';
    }


    // 해당 부분은 Life Cycle Hook관련 API를 보고자 한 것. 
    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeMount(() => {
      console.log("onBeforeMount");
    })

    // 해당 Component에서 사용할 수 있도록 하기 위해서는 이렇게 return해줘야 한다.
    return{
      reactiveMessage,
      normalMessage,
      addReactiveMessage
    };
  },
};  

</script>

<template>
  <div>
    <h2> 반응형 메시지 </h2>
    <p> {{ reactiveMessage }}  </p>
    <button v-on:click="addReactiveMessage">Add Message</button>

    <h2> 일반 메시지 </h2>
    <p> {{ normalMessage }} </p>
  </div>  

</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
