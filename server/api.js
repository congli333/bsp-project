const jwt = require('jsonWebToken')
const fs = require('fs')
function api (app, upload) {
  // 登录
  app.post('/dsp-admin/user/login', (req, res) => {
    let token = ''
    const {username, password} = req.body
    const userInfo = JSON.parse(fs.readFileSync('server/userInfo.json', {encoding: 'utf-8'}))
    userInfo.map(v => {
      if (v.username === username && v.password === password) {
        token = jwt.sign({username, password}, '1511', {exprires: '1h'})
        res.send({
          code: 0,
          msg: '登陆成功',
          token
        })
      }
    })
    res.send({
      code: 1,
      msg: '请求失败'
    })
  })
  // 上传图片
  app.post('/dsp-creative/creative/upload', upload.single('file'), (req, res) => {
    res.send({
      data: {
        size: req.file.size,
        value: req.file.path,
        key: '2A36B67C6'
      },
      status: 0
    })
  })
}
module.exports = api
