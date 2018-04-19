<template>
<div id='app'>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="auto" style="background-color: rgb(238, 241, 246)">
      <Aside :list='asideList' :isCollapse='isCollapse'/>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <i :class='[isCollapse ? "el-icon-d-arrow-right" : "el-icon-d-arrow-left", "show-hide"]' @click='isShow'></i>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown @command='handleCommand'>
          <span>
            {{$store.state.username}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='personal'>个人中心</el-dropdown-item>
            <el-dropdown-item command='logout'>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>
<script>
import Aside from '../../components/Aside'
export default {
  name: 'App',
  data () {
    return {
      asideList: [
        {
          text: '首页概览',
          index: '/index/home',
          icon: 'el-icon-menu'
        }, {
          icon: 'el-icon-printer',
          index: '/index/adAdmin',
          text: '广告管理',
          submenu: [
            {
              index: '/index/adAdmin/adminPlan',
              text: '广告计划'
            }, {
              index: '/index/adAdmin/adminEle',
              text: '广告单元'
            }, {
              index: '/index/adAdmin/adminCreate',
              text: '广告创意'
            }
          ]
        }, {
          icon: 'el-icon-news',
          text: '数据中心',
          index: '/index/dataCenter'
        }, {
          icon: 'el-icon-goods',
          index: '/index/toolBox',
          text: '工具箱'
        }
      ],
      isCollapse: false
    }
  },
  components: {
    Aside
  },
  methods: {
    isShow () {
      this.isCollapse = !this.isCollapse
    },
    // 退出登录
    handleCommand (command) {
      localStorage.setItem('token', '')
      this.$router.push({path: '/login'})
    }
  }
}
</script>
<style lang='scss'>
.wrapper{
  width: 100%;
  height: 100%;
}
.aside{
  float: left;
  height: 100%;
  background: #022050
}
.right-container{
  float: left;
}
.el-header{
  color: #333;
  line-height: 60px;
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  .show-hide{
    position: absolute;
    left: 0;
    top: 20px;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,0.05);
  }
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
