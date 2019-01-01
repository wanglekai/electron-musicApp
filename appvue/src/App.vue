<template>
  <div id="app">
    <my-header></my-header>
    <!-- <router-view/> -->
    <p @click="test">点击测试</p>
    <musicCardDL :isShow="isShowCard"></musicCardDL>
  </div>
</template>

<script>
import myHeader from '@/views/my-header/index'
import musicCardDL from '@/components/dialog/music-card'
import {mapState,mapGetters,mapActions} from 'vuex';
import { log } from 'util';
export default {
  name: 'App',
  computed:{
    ...mapGetters({
      isShowCard:'isShowCard'
    })
  },
  methods:{
    test(){
      this.$store.dispatch('hideFooter',true)
    }
  },
  components:{
    'my-header':myHeader,
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
