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
      <search-music></search-music>
    </section>
  </div>
</template>
<script>
import { navListData } from './unit/unit.js'
import SearchMusic from '@/components/search/SearchMusic'
import axios from 'axios'
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
  created(){
    // let url = 
    // '/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&key=a&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0';
    // //key 是input中的值
    // axios.get(url).then(res =>{
    //     console.log(res.data.data);
    // })
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
  margin: 0 auto;
  max-width: 1100px;
  height: 90px;
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
    margin-right: 20px;
    li{
      line-height: 90px;
      padding: 0 15px;
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
