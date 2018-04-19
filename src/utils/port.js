import $http from './request'

export function toLogin (userInfo, notify, router) {
  const {username, password} = userInfo
  $http.post('/dsp-admin/user/login', {username, password}).then(res => {
    const {code, msg, token} = res
    if (code === 0) {
      notify({
        title: msg,
        type: 'success'
      })
      localStorage.setItem('token', token)
      localStorage.setItem('username', username)
      router.push('/index/home')
    } else {
      notify.error({
        tit: '登陆失败',
        message: msg
      })
    }
  })
}
