<template>
<el-container>
  <el-header>
    sdfasfa
  </el-header>
  <el-main>
    <Tab />
  </el-main>
</el-container>
</template>
<script>
import Tab from '../../components/Tab.vue'
export default {
  name: 'adminCreate',
  components: {
    Tab
  }
}
</script>
<style lang="scss" scoped>
.el-container{
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.el-main{
  background: #f7f7f7;
  padding: 20px;
  width: 100%;
  flex:1;
  overflow: auto;
  line-height: 30px;
}
</style>

