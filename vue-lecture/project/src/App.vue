<template>
  <div>
    <h3> d3 - Confidence Interval Diagram </h3>
    <ConfIntervalDiagramVue :lowerBound="-47.64957075722661" :upperBound="216.7495707" :mean="84.55" :stdDev="95.389"></ConfIntervalDiagramVue>
    <br><br><br><br><br><br><br><br><br><br><br><br>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/databinding/string">String</router-link>
      <router-link to="/databinding/html">HTML</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import ConfIntervalDiagramVue from './views/ConfIntervalDiagram.vue'

export default {
  components: {
    ConfIntervalDiagramVue
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
