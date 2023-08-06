

<script>
// import {RouterLink} from 'vue-router'
export default {
  name: 'App',
  components: {
  }
}
</script>

<template>
  <i class="title">Hello Vue!</i>

  <ul>
    <li><router-link to="/Home">Home</router-link></li>
    <li><router-link to="/About">About Us</router-link></li>
  </ul>


  <router-view />
</template>

<style lang="less">

.title {
  color: deeppink;
  font-size: 20px;
}
</style>