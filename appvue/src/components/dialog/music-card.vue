<template>
  <div class="box">
    <el-dialog title="" :visible="isShow" width="1160" @close='closeDialog' :show-close="false" custom-class="dia-log">
      <section>
        <div class="img-box">
          <img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002bbaFW3d14kQ.jpg?max_age=2592000" alt="">
        </div>
        <div class="content">
          <h2>第三人称</h2>
          <P class="author"><i class="el-icon-info"></i>hush</P>
          <div class="detail">
            <p>专辑: x</p>
            <p>语种: 国语</p>
          </div>
          <div class="detail">
            <p>流派: Rock</p>
            <p>唱片公司: 相知国际科技有限公司 </p>
          </div>
          <div class="detail">
            <p>发行时间: 2012-10-12</p>
          </div>
          <div class="btns">
            <el-button type="primary">立即播放</el-button>
            <el-button>加入列表</el-button>
          </div>
        </div>
      </section>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SearchMusic',
  props:{
    isShow:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    changeVuex(){
      this.$store.dispatch('hideFooter',true)
    },
    closeDialog(){
      this.$store.dispatch('hideFooter',false)
    }
  }
}
</script>
<style lang='less' scoped>
section{
  display: flex;
}
.img-box{
  width: 250px;
  height: 250px;
  margin-right: 20px;
  img{
    width: 100%;
    height: 100%;
  }
}
.dia-log{
  .el-dialog__header{
    padding: 0;
  }
}
.content{
  h2{
    font-size: 30px;
    line-height: 50px;
    font-weight: 500;
    color: #222;
  }
  .author{
    color: #999;
    font-size: 16px;
    margin-bottom: 20px;
    i{
      margin-right: 4px;
    }
  }
}
.detail{
  line-height: 27px;
  font-size: 13px;
  display: flex;
  justify-content: start;
  p{
    width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
  }
  p:first-child{
    width: 200px;
    margin-right: 20px;
  }
}
.btns{
  margin-top: 20px;
  display: flex;
  justify-content: start;
}
</style>