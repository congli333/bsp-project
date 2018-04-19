<template>
<el-container class='creativity'>
  <h1>广告创意</h1>
  <section>
    <h3>落地页</h3>
    <el-row class='demo-input-size' type='flex'>
      <el-col :span='16' tyle='flex'>
        <span>着陆页地址：</span>
        <el-input size='mini' placeholder='请设置广告名称' v-model='adName'></el-input>
      </el-col>
    </el-row>
  </section>
  <section>
    <h3>上传创意</h3>
    <!-- 上传 -->
    <div class='createLists'>
      <ul>
        <li v-for='(item, ind) in createLists' :key='item.name' @click='changeCurrent(ind)' :class='currentInd === ind ? "cur" : ""'>
          {{item.name}}
        </li>
      </ul>
      <p>
        <b type="text" @click="open4">+添加创意</b>
      </p>
    </div>
    <el-container >
      <el-row class='demo-input-size' type='flex' :gutter="20">
        <el-col :span='16' tyle='flex'>
          <UpLoad :imgUrl='imgUrl' @updateImg='updateImg'/>
        </el-col>
      </el-row>
      <el-row class='demo-input-size' type='flex' :gutter="20">
        <el-col :span='16' tyle='flex'>
          <span>广告文案：</span>
          <el-input size='mini' placeholder='请设置广告文案' v-model='cwText' clearable></el-input>
        </el-col>
        <el-col :span='4' :offset='1'>
          <span>{{cwSize}}/18</span>
        </el-col>
      </el-row>
      <el-row class='demo-input-size' type='flex' :gutter="20">
        <el-col :span='16' tyle='flex'>
          <span>监控链接：</span>
          <el-input size='mini' placeholder='请设置监控链接' v-model='urlText'></el-input>
        </el-col>
      </el-row>
    </el-container>
    <el-row :gutter='20'>
      <el-col :span='4'>
        <el-button :disabled='!isDisabled ? isDisabled : true' @click='submit'>
          提交
        </el-button>
      </el-col>
    </el-row>
  </section>
</el-container>
</template>
<script>
import UpLoad from '../../components/UpLoad.vue'
import Mobel from '../../components/Mobel.vue'
import {mapState} from 'vuex'
export default {
  name: 'creativity',
  data () {
    return {
      adName: '', // 广告名称
      cwSize: 0, // 文案内容长度
      cwText: '',
      urlText: '',
      imgUrl: ''
    }
  },
  watch: {
    // 监测文本的字数
    cwText (newVal, oldVal) {
      this.cwSize = newVal.length
      this.cwText = oldVal
      if (this.cwSize > 18) {
        alert(`字数到底, 还可以添加${18 - oldVal.length}字`)
      } else {
        this.cwText = newVal
      }
    },
    currentCreateInfo () {
      const {imgUrl, cwText, urlText} = this.$store.state.currentCreateInfo
      this.imgUrl = imgUrl
      this.cwText = cwText
      this.urlText = urlText
      return this.$store.state.currentCreateInfo
    }
  },
  components: {
    UpLoad,
    Mobel
  },
  methods: {
    // 弹层
    open4 () {
      const that = this
      this.$msgbox({
        title: '选择模板',
        cancelButtonText: '单面',
        confirmButtonText: '多面',
        showCancelButton: true,
        type: 'success',
        center: true,
        showClose: false,
        callback (action) {
          if (that.createLists.length >= 5) {
            alert('创意个数以达到上限')
            return
          }
          that.$store.commit('addCreate', {action})
        }
      })
    },
    // 修改当前创意
    changeCurrent (ind) {
      this.$store.commit('changeCurrent', {
        ind
      })
    },
    // 更新图片
    updateImg (url) {
      this.imgUrl = url
    },
    // 提交
    submit () {
      const {cwText, urlText, imgUrl} = this
      console.log(imgUrl)
      this.$store.commit('updateCreateLists', {cwText, urlText, imgUrl})
    }
  },
  computed: {
    currentCreateInfo () {
      const {imgUrl, cwText, urlText} = this.$store.state.currentCreateInfo
      this.imgUrl = imgUrl
      this.cwText = cwText
      this.urlText = urlText
      return this.$store.state.currentCreateInfo
    },
    ...mapState(['currentCreateInfo', 'currentInd', 'createLists']),
    isDisabled () {
      // 是否不能点击
      const {cwText, urlText, imgUrl} = this
      if (cwText && urlText && imgUrl) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style scoped lang='scss'>
h3, h1, p{
  text-align: left;
}
.creativity{
  padding: 20px;
  display: block;
  text-align: left;
  >h1{
    line-height: 30px;
    font-size: 28px;
  }
}
.createLists{
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #eee;
  ul{
    float: left;
    li{
      float: left;
      margin: 0 10px;
      font-size: 12px;
      cursor: pointer;
      &.cur{
        border-bottom: 1px solid #f90;
        color: #f90;
      }
    }
  }
  p{
    float: left;
    margin: 0 10px;
    font-size: 12px;
  }
}
section{
  margin-bottom: 30px;
  margin-top: 10px;
  >h3{
    line-height: 40px;
    font-size: 16px;
  }
  >p{
    line-height: 30px;
    border-bottom: 1px solid #eee;
    span, b{
      font-size: 12px;
      display: inline-block;
      margin: 0 5px;
      &:first-child{
        margin-left: 0;
      }
    }
    span.cur{
      border-bottom: 1px solid #f90;
      color: #f90;
    }
    b{
      font-weight: normal;
      color: #09f;
    }
  }
  .el-col{
    line-height: 30px;
    display: flex;
    span{
      min-width: 100px;
      font-size: 12px;
    }
  }
}
.el-row{
  margin-top: 20px;
  clear: both;
}
.el-container{
  display: block
}
</style>
