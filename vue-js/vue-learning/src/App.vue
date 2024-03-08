<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <br><br>
  <h3>보간법에 관련된 내용입니다.</h3> <br>
  <InterpolationMethod/>

  <br><br>
  <h3>v-bind관련된 설명입니다.</h3> <br>
  <VBinding/>

  <br><br>
  <h3>이중중괄호 내의 Javascript 표현식에 대해서 설명하는 것입니다.</h3> <br>
  <JavascriptExpression/>

  <br><br>
  <h3>Directive Method에 대해서 전반적으로 설명하는 것입니다. </h3> <br>
  <DirectiveMethod/>

  <br><br>
  <h3>Script Setup 설명 입니다. - div를 클릭하면 count되게 됨. </h3>  <br>
  <ScriptSetup/>

  <br><br>
  <h3> ReactiveObject관련 설명입니다.</h3> <br>
  <ReactiveObject/>

  <br><br>
  <h3> Computed 관련 설명입니다.</h3> <br>
  <ComputedMethod/>

  <br><br>
  <h3> v-if v-show 관련 설명입니다.</h3> <br>
  <VIf/>

  <br><br>
  <h3> v-for 관련 설명입니다.</h3> <br>
  <VFor/>

</template>

<script>
import InterpolationMethod from './components/InterpolationMethod.vue';
import VBinding from './components/VBinding.vue';
import JavascriptExpression from './components/JavascriptExpression.vue';
import DirectiveMethod from './components/DirectiveMethod.vue';
import ScriptSetup from './components/reactive/ScriptSetup.vue';
import ReactiveObject from './components/reactive/ReactiveObject.vue';
import ComputedMethod from './components/computed/ComputedMethod.vue';
import VIf from './components/conditional/VIf.vue';
import VFor from './components/vFor/VFor.vue';


//export default로 literal object형태로 내뱉는다.
export default {
  name: 'App',
  components: {
    InterpolationMethod,
    VBinding,
    JavascriptExpression,
    DirectiveMethod,
    ScriptSetup,
    ReactiveObject,
    ComputedMethod,
    VIf,
    VFor
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
