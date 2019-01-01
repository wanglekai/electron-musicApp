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
    
    
              //这个是qq音乐新的跨域方式
        let origin = `https://bird.ioliu.cn/v1?url=`
        let url = origin + 'http://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&key=第三人称&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
        //key 是input中的值 
        axios.get(url).then(res =>{
            console.log(res);
        })
        //如果是第一次运行项目，先进入根目录下的 WYYMusicApi文件，cnpm install
        //每次运行项目前，先单独开一个命令行，进入根目录下的 WYYMusicApi ,运行 node app.js 
    // let key = '大海'
    //     //key 是input中的值
    // axios.get(`http://localhost:3000/search?keywords=${key}`).then(res =>{
    //   console.log(res);
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
