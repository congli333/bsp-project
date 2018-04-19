<template>
<div class='login'>
  <div class='opacity'></div>
  <el-row type='flex' justify='center' align='middle' class='container'>
    <el-col :span='8' class='form'>
      <h3>登录</h3>
      <el-form :model='formData' ref='formData' :rules='formRules' show-message status-icon>
        <el-form-item label='用户名' prop='username'>
          <el-input type='text' v-model='formData.username' placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label='密码' prop='password'>
          <el-input type='password' v-model='formData.password' placeholder="请输入密码" />
        </el-form-item>
        <el-form-item>
          <el-button type='primary' round class='submit' @click='submitForm("formData")'>登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<script>
import {toLogin} from '../../utils/port'
export default {
  name: 'login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      formRules: {
        username: [
          {type: 'email', message: '应该是邮箱格式'},
          {required: true, message: '还没有填写用户名'}
        ],
        password: [
          {min: 4, max: 6, message: '长度在4-6个字符之间'},
          {required: true, message: '还没有填写密码'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const {$notify, $router, formData} = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 格式正确 登录请求
          toLogin(formData, $notify, $router)
        } else {
          this.$notify({
            tit: 'error submit!!'
          })
          return false
        }
      })
    }
  }
}
</script>
<style scoped lang='scss'>
.login{
  width: 100%;
  height: 100%;
}
.opacity{
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('/static/img/login_bg.jpg');
  background-size:cover;
  filter: blur(5px)
}
.container{
  width: 100%;
  height: 100%;
}
.form{
  background: #fff;
  border-radius: 10px;
  >h3{
    line-height: 40px;
    background: #09f;
    text-align: center;
    color: #fff;
    border-radius: 10px 10px 0 0;
  }
  .el-form{
    padding: 20px;
  }
}
.submit{
  width: 100%;
}
</style>
