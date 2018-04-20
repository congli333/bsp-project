<template>
<el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage"
  :page-size="pageSize"
  layout="prev, pager, next, jumper"
  :total="total">
</el-pagination>
</template>
<script>
export default {
  name: 'page',
  data () {
    return {
      currentPage: 1,
      pageSize: 0,
      total: 0
    }
  },
  methods: {
    handleSizeChange (size) {
      console.log(size)
    },
    handleCurrentChange (current) {
      console.log(current)
    }
  },
  computed: {
    createLists () {
      const createLists = this.$store.state.createLists
      this.total = createLists.length
      this.pageSize = 20
      return createLists
    }
  }
}
</script>
