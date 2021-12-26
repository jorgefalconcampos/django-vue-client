<template>
  <div id="app">
    <Header/>
    <Categories/>
    <!-- <HolaMundo/> -->

    <router-link to="/">Lista</router-link>
    <router-link to="/detail">Detail</router-link>

    <router-view></router-view>
    <List/>
  </div>
</template>

<script>
// import HolaMundo from './components/HolaMundo.vue';
import Header from './components/Header.vue'
import Categories from './components/Types.vue'

export default {
  name: 'App',
  components: {
    Header,
    Categories,
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
