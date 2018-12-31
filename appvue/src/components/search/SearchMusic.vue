<template>
  <div class="search-wrapper">
    <el-input 
      placeholder="请输入内容"
      v-model="searchContent"
      @blur="handleInputBlur"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend">
        <el-option label="网易云音乐" value="1"></el-option>
        <el-option label="QQ音乐" value="2"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <dl class="search-hint" :class="{searchIsFocus: isFocus}">
      <dt>
        <i class="el-icon-service"></i>
        <span class="classify">单曲</span>
      </dt>
      <dd>
        <ul>
          <li>XXX-XXX</li>
          <li>YYY-YYY</li>
          <li>ZZZ-ZZZ</li>
          <li>NNN-NNN</li>
        </ul>
      </dd>
      <dt>
        <i class="el-icon-info"></i>
        <span class="classify">歌手</span>
      </dt>
      <dd>
        <ul>
          <li>PPP-PP</li>
          <li>MMM-MM</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
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
      select: '1'
    }
  },
  methods: {
    handleInputBlur () {
      this.isFocus = false
    }
  },
  watch: {
    searchContent (value) {
      if (value.trim()!=='') {
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
    width: 500px;
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
      width: 312px;
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
        &:hover{
          background-color: #409EFF;
          color: #fff;
        }
      }
    }
    .searchIsFocus {
      display: block;
    }
  }
</style>