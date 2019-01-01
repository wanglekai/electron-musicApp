<template>
  <div class="search-wrapper">
    <el-input 
      placeholder="搜素音乐、歌手"
      v-model="searchContent"
      @blur="handleInputBlur"
      @focus="handleInputFocus"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend">
        <el-option label="QQ音乐" value="1"></el-option>
        <el-option label="网易云音乐" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <dl 
      class="search-hint" 
      :class="{searchIsFocus: isFocus}"
    >
      <dt v-show="songs.length">
        <i class="el-icon-service"></i>
        <span class="classify">单曲</span>
      </dt>
      <dd v-show="songs.length">
        <ul>
          <li v-for="song in songs" :key="song.docid">
            <span>{{song.name}}</span>
            <span class="singer">- {{song.singer}}</span>
          </li>
        </ul>
      </dd>
      <dt v-show="singers.length">
        <i class="el-icon-info"></i>
        <span class="classify">歌手</span>
      </dt>
      <dd>
        <ul v-show="singers.length">
          <li v-for="singer in singers" :key="singer.docid">{{singer.name}}</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
import axios from 'axios'
import {
  Input,
  Select
} from 'element-ui'

export default {
  name: 'SearchMusic',
  data() {
    return {
      isFocus: false,
      searchContent: '',
      select: '1',
      songs: [],
      singers: []
    }
  },
  methods: {
    handleInputBlur () {
      this.isFocus = false
    },
    handleInputFocus () {
      if (this.searchContent.trim() !=='') {
        this.isFocus = true
      }
    },
    getQQMusicData (value) {
      let origin = `https://bird.ioliu.cn/v1?url=`
      let url = origin + `http://c.y.qq.com/splcloud/fcgi-bin/smartbox_new.fcg?is_xml=0&key=${value}&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0`
      //key 是input中的值
      axios.get(url).then( result =>{
        const res = result.data
          this.songs = res.data.song.itemlist
          this.singers = res.data.singer.itemlist
      })
    },
    getWangYiMusicData (value) {
      console.log(value);
      
      // let key = '大海'
        //key 是input中的值
      // axios.get(`http://localhost:3000/search?keywords=${value}`).then(res =>{
      //   console.log(res);
      // })
    }
  },
  watch: {
    searchContent (value) {
      if (value.trim()!=='') {
        if (this.select==='1') {
          //搜素 qq 音乐
          this.getQQMusicData(value)
        } else {
          // 搜素网易云音乐
          this.getWangYiMusicData(value)
        }
        this.isFocus = true
      }
      else {
         this.isFocus = false
      }
    }
  }
}
</script>
<style lang='less'>
  .search-wrapper {
    position: relative;
    width: 400px;
    .el-select .el-input {
      width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .search-hint {
      display: none;
      position: absolute;
      left: 131px;
      box-sizing: border-box;
      width: 212px;
      border: 1px solid #ccc;
      border-top: none;
      z-index: 99;
      dt {
        padding: 10px 0 10px 20px;
        .classify {
          color: #9b9b9b;
        }
      }
      
      ul li {
        padding: 10px 10px 10px 40px;
        overflow: hidden; /*自动隐藏文字*/
        text-overflow: ellipsis;/*文字隐藏后添加省略号*/
        white-space: nowrap;/*强制不换行*/
        font-size: 14px;
        .singer {
          color: #999;
        }
        &:hover {
          background-color: #409EFF;
          color: #fff;
          .singer {
            color: #fff;
          }
        }
      }
    }
    .searchIsFocus {
      display: block;
    }
  }
</style>