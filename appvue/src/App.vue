<template>
  <div id="app">
    <my-header></my-header>
    <player-footer></player-footer>
    <!-- <router-view/> -->
    <musicCardDL></musicCardDL>
  </div>
</template>

<script>
import myHeader from '@/views/my-header/index'
import playerFooter from '@/views/player-footer/index'
import musicCardDL from '@/components/dialog/music-card'
import {mapState,mapGetters,mapActions} from 'vuex';
import { log } from 'util';
import '../static/iconfont/iconfont.css'
export default {
  name: 'App',
  components:{
    'my-header': myHeader,
    'player-footer': playerFooter,
    musicCardDL
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body{
  margin: 0;
}
ul,li,p,h1,h2,h3,h4,section,main,aside,dl,dt,dd{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
</style>
