// 使用axios做请求拦截，响应拦截
import axios from 'axios'
// 创建实例axios
const instance = axios.create({
  // 如果`url`不是绝对地址，那么`baseURL`将会加到`url`的前面
  // 当`url`是相对地址的时候，设置`baseURL`会非常的方便
  baseURL: 'http://localhost:3000',
  headers: {
    plantform: 'PC'
  }
})
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
// 添加拦截器
// 请求拦截器
instance.interceptors.request.use((config) => {
  // 在请求发生之前进行的一些操作
  config.heades = {
    'Content-Type': 'application/json;charset=utf-8',
    'Accept': 'application/json, text/plain, */*',
    'token': localStorage.getItem('token')
  }
  return config
}, (err) => {
  throw err
})
// 响应拦截器
instance.interceptors.response.use((res) => {
  // 在then/catch执行之前执行的操作
  return res.data
}, (err) => {
  throw err
})
export default instance
