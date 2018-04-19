<template>
<div class='aside'>
  <el-menu background-color='#1C2941' text-color='#fff' :collapse="isCollapse">
    <el-menu-item index='index'>
      <i class='el-icon-warning'></i>
      <span>
        <b>智能投放系统</b>
      </span>
    </el-menu-item>
  </el-menu>
  <el-menu default-active="/index/home" background-color='#022050' text-color='#eee' class="el-menu-vertical-demo" :collapse="isCollapse" :router='true'>
    <el-menu-item index='/index/createAD' class='new'>
      <i class='el-icon-plus'></i>
      <span>新建广告</span>
    </el-menu-item>
    <template v-for='item in list'>
      <el-menu-item v-if='!item.submenu' :index='item.index'  :key='item.text'>
        <i :class='item.icon'></i>
        <span>{{item.text}}</span>
      </el-menu-item>
      <el-submenu v-else :index='item.index'  :key='item.text'>
        <template slot='title'>
          <i :class='item.icon'></i>
          <span>{{item.text}}</span>
        </template>
        <el-menu-item v-for='v in item.submenu' background-color='#1C2941' :key='v.text' :index='v.index'>
          {{v.text}}
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</div>
</template>

<style lang='scss'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  span, .el-menu-item{
    font-size: 12px;
  }
}
.el-submenu .el-menu-item{
  background: #1C2941;
}
.is-active{
  background:#2873FF;
  color: #fff;
}
.new{
  i, span{
    font-size: 12px;
  }
  background-image: linear-gradient(90deg, #095DE1 0%, #081A6C 94%);
  margin: 20px 0;
}
</style>

<script>
export default {
  name: 'asideItem',
  props: {
    list: {
      type: Array,
      required: HTMLSourceElement
    },
    isCollapse: Boolean
  },
  data () {
    return {
      menuStyle: {
        backgroundColor: '#022050',
        textColor: '#fff'
      }
    }
  }
}
</script>
