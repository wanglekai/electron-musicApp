<template>
  <div class="box">
    <el-dialog title="" :visible="isShowCardWYY" width="700px" @close='closeDialog' :show-close="false" custom-class="dia-log">
      <section v-if="songinfo">
        <div class="img-box">
          <img :src="songinfo.al.picUrl" alt="">
        </div>
        <div class="content">
          <h3>{{songinfo.name}}</h3>
          <div class="detail">
            <span>歌手: </span>
            <span> {{songinfo.al.name}}</span>
          </div>
          <div class="detail">
            <span>所属专辑: </span>
            <span> {{songinfo.ar[0].name}}</span>
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
import {mapState,mapGetters,mapActions} from 'vuex';
export default {
  name: 'SearchMusic',
  data() {
    return {
      songinfo:null
    }
  },
  computed:{
    ...mapGetters({
      getCardDataWYY:'getCardDataWYY',
      isShowCardWYY:'isShowCardWYY'
    })
  },
  methods: {
    changeVuex(){
      this.$store.dispatch('setStatusWYY',true)
    },
    closeDialog(){
      this.$store.dispatch('setStatusWYY',false)
    },
      // 传入歌曲的mid，拼接成图片路径  图片url拼接规则:https://y.gtimg.cn/music/photo_new/ + 业务id + R图片尺寸x图片尺寸 + 业务类型 + mid + 图片类型
    getImgSrc(midId){
      return `https://y.gtimg.cn/music/photo_new/T002R300x300M000${midId}.jpg?max_age=2592000`
    },
    getData(id){
      //id = 29724295;
      let url = `http://localhost:3000/song/detail?ids=${id}`
      axios.get(url).then(res =>{
        this.songinfo = res.data.songs[0];
        console.log(this.songinfo);
      })
    },
  },
  watch:{
    getCardDataWYY(value){
      this.getData(value.id)
      console.log(value);
    }
  }
}
</script>
<style lang='less' scoped>
section{
  display: flex;
}

.dia-log{
  .el-dialog__header{
    padding: 0;
  }
}
.img-box{
  width: 250px;
  height: 250px;
  box-sizing: border-box;
  padding: 42px;
  background-image: url('../../assets/img/coverall.png');
  background-size: 250px 250px;
  margin-right: 20px;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.content{
  color: #333;
  h3{
    font-size: 30px;
    line-height: 50px;
    color: #222;
    padding-top: 10px;
  }
  .detail{
    line-height: 20px;
    span:first-child{
      color: #777;
    }
  }
  .btns{
    margin-top: 86px;
  }
}
</style>