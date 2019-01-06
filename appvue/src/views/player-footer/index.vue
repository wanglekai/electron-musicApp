<template>
  <footer>
    <div class="wrapper">
      <div class="wrapper-content">
        <div class="control_player">
          <span class="icon btn prev"></span>
          <span
            class="icon btn toggle"
            :class="[isPlay ? 'play' : 'pause']"
            @click="handlerClickToggle">
          </span>
          <span class="icon btn next"></span>
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
      isPlay: true
    }
  },
  methods: {
    handlerClickToggle () {
      this.isPlay = !this.isPlay      
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
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .control_player {
        display: flex;
        align-items: center;
        .icon {
          display: block;
          margin-left: 20px;
          background: url('../../assets/img/btn.png');
          cursor: pointer;
        }
        .prev, .next {
          width: 36px;
          height: 36px;
          border-radius: 36px;
        }
        .prev {
          background-position: 0 -143px;
          &:hover {
            background-position: -36px -143px;
          }
        }
        .toggle {
          width: 60px;
          height: 60px;
          border-radius: 60px;
        }
        .next {
          background-position: -144px -143px;
          &:hover {
            background-position: -180px -143px;
          }
        }
        .pause {
          &:hover {
            background-position: -60px 0;
          }
        }
        // 切换播放 暂停状态
        .play {
          background-position: 0 -60px;
          &:hover {
            background-position: -60px -60px;
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
          width: 520px;
          height: 60px;
          padding: 0 20px;
          .song_info {
            display: flex;
            justify-content: space-between;
            padding: 5px 0 14px 0;
          }
          .control_jindu {
            position: relative;
            border: 2px solid #909090;          
            .control_circle {
              position: absolute;
              top: -8px;
              left: -2px;
              display: block;
              width: 15px;
              height: 15px;
              background-color: #fff;
              border-radius: 100%;
              cursor: pointer;
            }
          }
        }
        
      }
      .other_buttons {
        .iconfont {
          margin-left: 40px;
          cursor: pointer;
          font-size: 24px;
        }
        .icon-SOUNDPLUS {
          font-size: 30px;
        }
      }
    }
  }
}
</style>
