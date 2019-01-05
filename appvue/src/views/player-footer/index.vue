<template>
  <footer>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="control_player">
          <div class="circle prev">
            <span class="iconfont icon-next"></span>
          </div>
          <div class="circle play">
            <span class="iconfont icon-zanting"></span>
          </div>
          <div class="circle next">
            <span class="iconfont icon-next"></span>
          </div>
        </div>
        <div class="music_wrapper">
          <div class="img_cover"></div>
          <div class="song_info_wrapper">
            <div class="song_info">
              <div>歌名</div>
              <div>
                <span>00:00</span> / 
                <span>02:43</span>
              </div>
            </div>
            <div class="control_jindu">
              <span class="control_circle"></span>
            </div>
          </div>
        </div>
        <div class="other_buttons">
          <span class="iconfont icon-SOUNDPLUS"></span>
          <span class="iconfont icon-liebiaoxunhuan"></span>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'PlayerFooter',
  data () {
    return {
      text: 'PlayerFooter'
    }
  }
}
</script>
<style lang='less'>

footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80px;
  background-color: #000;
  opacity: .3;
  filter: alpha(opacity=30);
  box-shadow: 0 -10px 20px #403f3f;
  .wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    margin: 0 auto;
    max-width: 1100px;
    color: #fff;
    .wrapper-content {
      display: flex;
      align-items: center;
      .control_player {
        display: flex;
        align-items: center;
        .circle {
          width: 32px;
          height: 32px;
          margin-right: 20px;
          border-radius: 100%;
          background-color: #000;
          border: 2px solid #fff;
          text-align: center;
          line-height: 32px;
          color:#fff;
          cursor: pointer;
          .icon-next {
            font-size: 10px;
          }
        }
        .prev {
           transform: rotateY(180deg)
        }
        .play {
          width: 50px;
          height: 50px;
          line-height: 50px;
          .icon-zanting {
            font-size: 36px;
          }
        }
      }
      .music_wrapper {
        display: flex;
        .img_cover {
          width: 60px;
          height: 60px;
          background-color: #fff;
        }
        .song_info_wrapper{
          width: 360px;
          height: 60px;
          padding: 0 20px;
          .song_info {
            display: flex;
            justify-content: space-between;
          }
          .control_jindu {
            border: 2px solid #fff;
          }
        }
        
      }
      .other_buttons {
        .iconfont {
          cursor: pointer;
          font-size: 24px;
        }
      }
    }
  }
}
</style>
