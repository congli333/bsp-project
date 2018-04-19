<template>
<el-upload
  class="avatar-uploader"
  action="http://localhost:3000/dsp-creative/creative/upload"
  :show-file-list="false"
  :on-success="handleAvatarSuccess">
  <img v-if="imgUrl" :src="imgUrl" class="avatar">
  <p v-else class='avatar-uploader-icon'>
    <b>640*240像素</b>
    <b>+点击上传</b>
  </p>
</el-upload>
</template>

<style lang='scss'>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  width: 178px;
  height: 178px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  b{
    font-size: 24px;
    line-height: 1.5;
    display: block;
    color: #a2a2a2;
    &:last-child{
      font-size: 14px;
      color: #409EFF;
    }
  }
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
export default {
  props: ['imgUrl'],
  methods: {
    handleAvatarSuccess (res, file) {
      // URL.createObjectURL(file.raw)
      this.$emit('updateImg', URL.createObjectURL(file.raw))
    },
    // 对传回来的数据进行的检测
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
