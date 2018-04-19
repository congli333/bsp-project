<template>
<el-container class='home-wrapper'>
  <el-row :gutter="20" type='flex'>
    <el-col v-for="o in 2" :key="o" :span='8'>
      <el-card class="box-card" shadow='hover' :body-style='{"line-height": "20px"}'>
        {{'列表内容 ' + o }}
      </el-card>
    </el-col>
  </el-row>
  <el-container class='home-container'>
    <el-row type='flex' class='table-header'>
      <span>整体情况</span>
      <div>
        <el-date-picker
          v-model="currentRange.start"
          type="month"
          value-format='yyyy/MM'
          @change='rangeChange'
          placeholder="开始日期">
        </el-date-picker>
        <el-date-picker
          v-model="currentRange.end"
          type="month"
          @change = 'rangeChange'
          value-format='yyyy/MM'
          placeholder="结束日期">
        </el-date-picker>
      </div>
    </el-row>
    <el-row type='flex' :gutter="20" class='show-info'>
      <el-col v-for="o in 4" :key="o" :span='5'>
        <el-card class="box-card" shadow='always' :body-style='{"line-height": "20px"}'>
          {{'列表内容 ' + o }}
        </el-card>
      </el-col>
    </el-row>
    <el-row type='flex' class='table-header'>
      <Select />
      <Select />
    </el-row>
    <el-row>
      <div class='chart' ref='charts'></div>
    </el-row>
  </el-container>
</el-container>
</template>
<script>
import DateChose from '../../components/DateChose.vue'
import Echarts from 'echarts'
import Select from '../../components/Select.vue'
export default {
  name: 'home',
  data () {
    return {
      option: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: '',
      currentRange: {
        start: '',
        end: ''
      }
    }
  },
  components: {
    DateChose,
    Select
  },
  mounted () {
    let echartsInstance = Echarts.init(this.$refs.charts)
    echartsInstance.setOption(this.option)
    /* const opts = {
      width: 'auto',
      height: 'auto'
    }
    echartsInstance.resize(opts => {

    }) */
  },
  methods: {
    rangeChange () {
      // 范围发生改变，就改变数据
      const {start, end} = this.currentRange
      let {0: startY, 1: startM} = start.split('/')
      let {0: endY, 1: endM} = end.split('/')
      const months = []
      while (startY < endY || (startY == endY && startM <= endM)) {
        if (startY < endY) {
          // 不同年
          if (startM <= 12) {
            months.push(`${startY}/${startM}`)
            startM++
          } else {
            startY++
            startM = 1
          }
        } else {
          if (startM <= endM) {
            months.push(`${startY}/${startM}`)
            startM++
          } else {
            console.log('到底')
          }
        }
      }
      console.log(months)
    }
  }
}
</script>
<style lang='scss' scoped>
.home-wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
}
.home-container{
  display: block;
  flex:1;
  background:#fff;
}
.el-row {
  width: 100%;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  line-height: 20px;
}
.table-header{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  padding: 0 20px;
}
.chart{
  margin-top: 20px;
  width: 100%;
  height: 300px;
}
.show-info{
  margin-left: 20px;
}
</style>
