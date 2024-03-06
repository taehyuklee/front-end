<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <InterpolationMethod/>
  <VBinding/>
  <JavascriptExpression/>
  <DirectiveMethod/>
</template>

<script>
import InterpolationMethod from './components/InterpolationMethod.vue';
import VBinding from './components/VBinding.vue';
import JavascriptExpression from './components/JavascriptExpression.vue';
import DirectiveMethod from './components/DirectiveMethod.vue';


//export default로 literal object형태로 내뱉는다.
export default {
  name: 'App',
  components: {
    InterpolationMethod,
    VBinding,
    JavascriptExpression,
    DirectiveMethod
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
