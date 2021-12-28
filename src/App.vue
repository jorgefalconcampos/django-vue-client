<template>
  <div id="app">
    <Header/>
    <div class="container">
      <div class="row pt-4">
        <div class="col-6">
          <Categories/>
          <Types/>
      </div>
      <div class="col-6">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- <router-link to="/">Lista</router-link>
    <router-link to="/detail">Detail</router-link> -->

    <!-- <List/> -->

    
  </div>
</template>

<script>
// import HolaMundo from './components/HolaMundo.vue';
import Header from './components/Header.vue'
import Categories from './components/Categories.vue'
import Types from './components/Types.vue'

export default {
  name: 'App',
  components: {
    Header,
    Categories,
    Types,
  }
}
</script>

<style>

</style>
