export default {
  getUsername (state, payload) {
    state.username = payload
  },
  // 更新创意列表
  updateCreateLists (state, payload) {
    const {imgUrl, cwText, urlText} = payload
    const {currentInd} = this.state
    const {name, type} = state.createLists[currentInd]
    state.createLists[currentInd] = {
      imgUrl,
      cwText,
      urlText,
      name,
      type
    }
  },
  // 添加创意
  addCreate (state, payload) {
    state.createLists.push({
      name: `创意${state.createLists.length + 1}`,
      type: payload.action === 'cancel' ? 'single' : 'mutiple',
      cwText: '',
      urlText: '11111111111111',
      imgSrc: ''
    })
    state.currentInd = state.createLists.length - 1
    state.currentCreateInfo = state.createLists[state.currentInd]
  },
  // 改变当前的显示
  changeCurrent (state, payload) {
    state.currentInd = payload.ind
    state.currentCreateInfo = state.createLists[payload.ind]
  }
}
