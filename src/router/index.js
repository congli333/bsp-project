import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config'
import store from '../store/store'
import jwt from 'jsonwebtoken'

Vue.use(Router)
const router = new Router({
  routes
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const login = isLogin() // 是否登录
  // 判断是否去登录
  if (to.name === 'login' || login) {
    next()
  } else {
    // 去登录
    next({
      path: '/login'
    })
    // location.href = '/login'
  }
  // 跳转路由, 获取username
  const token = localStorage.getItem('token')
  if (token) {
    const userInfo = jwt.verify(token, '1511')
    store.commit('getUsername', userInfo.username)
  }
})

function isLogin () {
  const token = localStorage.getItem('token')
  return !!token
}

export default router
