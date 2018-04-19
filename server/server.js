const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const multer = require('multer') // 上传文件的中间件
const app = express()
app.use(bodyParser.json())
// app.use(express.static('./'))

let storage = multer.diskStorage({
  destination (res, file, cb) {
    cb(null, './server/uploadImg') // 上传文件的路径
  },
  filename (res, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})
let upload = multer({storage: storage})

// 设置默认的请求头
app.use('*', (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*') // 跨域的路径
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, token, plantform')
  res.setHeader('Content-Type', 'application/json;chartset=utf-4')
  next()
})

api(app, upload)

app.listen(3000, () => console.log('port is 3000 ...'))
