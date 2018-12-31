<template>
  <div class="box">
    <section>
      <h1>音乐</h1>
      <ul>
        <li 
          v-for="(item) in navList" 
          :class="{ select:selectNav===item.type }" 
          :key="item.type"  
          @click="changeNav(item.type)"
        >
        {{item.name}}
      </li>
      </ul>
    </section>
    <search-music></search-music>
  </div>
</template>
<script>
import { navListData } from './unit/unit.js'
import SearchMusic from '@/components/search/SearchMusic'
export default {
  name: 'myheader',
  data () {
    return {
      navList:navListData,
      selectNav:0
    }
  },
  methods:{
    changeNav(index){
      this.selectNav = index;
    }
  },
  components:{
    SearchMusic
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.box{
  background: #fff;
}
section{
  max-width: 1000px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  h1{
    font-size: 0px;
    width: 170px;
    height: 46px;
    background-image: url('../../assets/logo/QQlogo.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-right: 20px;
  }
  ul{
    display: inline-flex;
    li{
      line-height: 90px;
      padding: 0 20px;
      font-size: 18px;
      cursor: pointer;
      &:hover{
        color: #409EFF;
      }
    }
    .select{
      color: #fff;
      background-color: #409EFF;
      &:hover{
        color: #fff;
      }
    }
  }
}
</style>
