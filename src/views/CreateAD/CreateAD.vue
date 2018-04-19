<template>
<el-container class='ad-wrapper'>
  <el-aside width="140px" style="background-color: #F5F5F5">
    <ul class='ad-list'>
      <li v-for='item in list' :key='item.text'>
        <router-link :to='item.link'>{{item.text}}</router-link>
        <ol>
          <li v-for='v in item.children' :key='v.text'>{{v.text}}</li>
        </ol>
      </li>
    </ul>
  </el-aside>
  <el-container style='background: #fff'>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<style scoped lang='scss'>
.ad-wrapper, .el-main{
  width: 100%;
  height: 100%;
  background: #fff;
}
.ad-list{
  >li{
    line-height: 40px;
    font-size: 14px;
    text-align: left;
    margin-left: 20px;
  }
  ol li {
    font-size: 12px;
    margin-left: 20px;
  }
  .el-main{
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: left;
  }
}
</style>

<script>
export default {
  data () {
    return {
      list: [
        {
          text: '建立广告计划',
          link: '/index/createAD/planner',
          children: [
            {
              text: '选择计划'
            }
          ]
        }, {
          text: '广告单元',
          link: '/index/createAD/element',
          children: [
            {
              text: '基本信息'
            }, {
              text: '定向'
            }, {
              text: '广告位'
            }, {
              text: '出价'
            }
          ]
        }, {
          text: '广告创意',
          link: '/index/createAD/creativity',
          children: [
            {
              text: '落地页'
            }, {
              text: '上传创意'
            }
          ]
        }
      ]
    }
  }
}
</script>
