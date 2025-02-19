<template>
  <!-- Vue의 template안에는 무조건적으로 최상위 div (많은 Case로 div로)tag가 하나 존재해야 한다.-->
  <div id="id">
    <!-- 문자열 Data Binding할때는 {{ }} 중괄호 두개를 사용한다. -->
    <h1>Hello {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  // 함수인데 function key word를 사용하지 않는다.
  data() {
    return {
      userName: 'John Doe',
      message: 'Welcome 개발자의 품격',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>
/** scoped는 해당 vue파일에만 해당된다. 전체 적용하기 위해서는 scoped빼야하고 보통 그런 css는 assets에 넣는다 */

</style>
