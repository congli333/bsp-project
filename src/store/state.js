const createLists = [
  {
    name: '创意一',
    tyle: 'single',
    cwText: '111111',
    urlText: '',
    imgUrl: ''
  }, {
    name: '创意二',
    tyle: 'single',
    cwText: '',
    urlText: '222222',
    imgUrl: ''
  }
]
export default {
  username: '',
  createLists,
  currentCreateInfo: createLists[0], // 当前显示的创意
  currentInd: 0
}
