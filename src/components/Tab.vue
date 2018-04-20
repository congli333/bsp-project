<template>
<el-table
  :data="createLists"
  size = 'small'
  :stripe='true'
  :highlight-current-row='true'
  tooltip-effect="dark"
  style="width: 100%">
  <el-table-column
    type='selection'
    width="50">
  </el-table-column>
  <el-table-column label='创意素材' width='100'>
    <template slot-scope="scope">
      <img :src='scope.row.imgUrl' />
    </template>
  </el-table-column>
  <el-table-column
    v-for='(item, ind) in columns'
    :key='ind'
    :prop='item.props'
    :label='item.name'
  >
  </el-table-column>
  <el-table-column
    label="操作"
    fixed='right'>
    <template slot-scope="scope">
      <el-button
        @click.native.prevent="deleteRow(scope.$index, tableData4)"
        type="text"
        size="small">
        移除
      </el-button>
    </template>
  </el-table-column>
</el-table>
</template>
<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  data() {
    return {
      columns: [
        {
          props: 'name',
          name: '创意ID'
        }, {
          props: 'type',
          name: '创意类型'
        }, {
          props: 'size',
          name: '尺寸'
        }, {
          props: 'laddingUrl',
          name: '落地页链接'
        }, {
          props: 'urlText',
          name: '检测链接'
        }, {
          props: 'element',
          name: '所属单元'
        }, {
          props: 'planner',
          name: '所属计划'
        }, {
          props: 'exposure',
          name: '曝光量'
        }, {
          props: 'clickNum',
          name: '点击量'
        }, {
          props: 'status',
          name: '状态'
        }
      ]
    }
  },
  computed: {
    createLists () {
      const createLists = this.$store.state.createLists
      return createLists
    }
  }
}
</script>
<style lang="scss" scoped>
.el-table{
  width: 100%;
  height: 100%;
}
.el-table .cell img{
  width: 100px;
  height: auto;
}
</style>

