<template>
<el-container class='ad-element'>
  <h1>广告单元</h1>
  <!-- <iframe src="http://www.baidu.com" width='100%' frameborder="0">跳转到百度</iframe> -->
  <el-container>
    <h3>基本信息</h3>
    <el-form label-position='left' label-width='100px' :model='baseInfo'>
      <el-row :gutter='20'>
        <el-col :span='16'>
          <el-form-item label='单元名称:'>
            <el-input :model='baseInfo.name' size="small" placeholder='请设置广告名称'></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter='20'>
        <el-col :span='16'>
          <el-form-item label='投放周期:'>
            <el-date-picker
              v-model="baseInfo.cycle"
              type="date"
              size='small'
              placeholder="请选择订单日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-container>
  <el-container>
    <h3>定向</h3>
    <el-form :model='diretional'>
      <el-form-item label='性别：'>
        <el-radio-group v-model='diretional.sex' size="small">
          <el-radio-button label='不限'></el-radio-button>
          <el-radio-button label='男'></el-radio-button>
          <el-radio-button label='女'></el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label='年龄：'>
        <el-radio-group v-model='diretional.ageRange.bigRange' size="small">
          <el-radio-button label='不限'></el-radio-button>
          <el-radio-button label='指定年龄段'></el-radio-button>
        </el-radio-group>
        <el-row v-if='diretional.ageRange.bigRange == "指定年龄段"' class='specific-range'>
          <el-radio-group v-model='diretional.ageRange.smallRange' size="small">
            <el-radio-button label='<6'></el-radio-button>
            <el-radio-button label='6-12'></el-radio-button>
            <el-radio-button label='>12'></el-radio-button>
          </el-radio-group>
        </el-row>
      </el-form-item>
      <el-form-item label='地域：'>
        <el-radio-group v-model='diretional.areaRange.bigRange' size="small">
          <el-radio-button label='不限'></el-radio-button>
          <el-radio-button label='指定省市'></el-radio-button>
        </el-radio-group>
        <el-row v-if='diretional.areaRange.bigRange == "指定省市"' class='specific-range'>
          <el-radio-group v-model='diretional.areaRange.specificRange' size="small">
            <el-radio-button label='<6'></el-radio-button>
            <el-radio-button label='6-12'></el-radio-button>
            <el-radio-button label='>12'></el-radio-button>
          </el-radio-group>
        </el-row>
      </el-form-item>
    </el-form>
  </el-container>
  <el-container>
    <h3>广告位</h3>
  </el-container>
  <el-container>
    <h3>出价</h3>
  </el-container>
</el-container>
</template>
<script>
export default {
  name: 'ad-element',
  data () {
    return {
      baseInfo: { // 基本信息数据
        name: '',
        cycle: []
      },
      diretional: { // 定向数据
        sex: 'all',
        ageRange: {
          bigRange: 'all',
          smallRange: '<6'
        },
        areaRange: {
          bigRange: '',
          specificRange: ''
        },
        class: {

        },
        timeRange: 'all'
      }
    }
  }
}
</script>
<style scoped lang='scss'>
.ad-element{
  padding: 20px;
  display: block;
  text-align: left;
  >h1{
    line-height: 30px;
    font-size: 28px;
  }
}
.el-container {
  margin-top: 10px;
  margin-bottom: 30px;
  display: block;
  >h3{
    font-size: 16px;
    line-height: 40px;
  }
}
.el-form-item{
  .el-input__prefix{
    position: absolute;
    right: 5px !important;
    left: 0 !important;
  }
}
.specific-range{
  margin-left: 60px;
}
</style>
