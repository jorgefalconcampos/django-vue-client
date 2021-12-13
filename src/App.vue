<template>
  <div id="app">
    <Header/>
    <HolaMundo/>
    <List/>
    <Detail/>
  </div>
</template>

<script>
import HolaMundo from './components/HolaMundo.vue';
import List from './components/List.vue';
import Detail from './components/Detail.vue';
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    HolaMundo,
    List,
    Detail,
    Header
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
