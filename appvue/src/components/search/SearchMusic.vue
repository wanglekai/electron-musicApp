<template>
  <div class="search-wrapper">
    <div>
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-select v-model="select" slot="prepend">
          <el-option label="网易云音乐" value="1"></el-option>
          <el-option label="QQ音乐" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
   </div>
   <div class="hint-wrapper">
    <dl>
      <dt>
        <i class="el-icon-service"></i>
        单曲
      </dt>
      <dd>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </dd>
      <dt>
        <i class="el-icon-info"></i>
        歌手</dt>
      <dd>
        <ul>
          <li>a</li>
          <li>b</li>
          <li>c</li>
        </ul>
      </dd>
    </dl>
  </div>
  </div>
</template>

<script>
import {
  Input
} from 'element-ui'

export default {
  name: 'SearchMusic',
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: '1'
    }
  }
}
</script>

<style scoped>
  .search-wrapper {
    width: 500px;
  }
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .hint-wrapper {
    box-sizing: border-box;
    padding: 0 0 10px 20px;
    margin: 2px 0 0 131px;
    width: 312px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  .hint-wrapper dl dt {
    padding: 10px 0;
    color:#adadad;
  }

  .hint-wrapper  ul li{
    padding: 5px 20px;
  }
</style>