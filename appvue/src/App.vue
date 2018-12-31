<template>
  <div id="app">
    <my-header></my-header>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import myHeader from '@/views/my-header/index'
export default {
  name: 'App',
  components:{
    'my-header':myHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body{
  background-color: #ddd;
}
body,ul,li,p,h1,h2,h3,h4,section,main,aside{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
