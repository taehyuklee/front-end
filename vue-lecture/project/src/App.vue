<template>
  <div>
    <h3> d3 - Confidence Interval Diagram </h3>
    <!-- <ConfIntervalDiagramVue :lowerBound="482.599114827485" :upperBound="518.400885172515" :mean="500.5" :stdDev="288.8194360957494"></ConfIntervalDiagramVue> -->
    <ConfIntervalDiagramVue :upperBound="-0.693" :lowerBound="-1.95" :mean="-1.322" :stdDev="0.320"></ConfIntervalDiagramVue>
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
