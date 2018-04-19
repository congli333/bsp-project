import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutation'
import actions from './actions'
import state from './state'
Vue.use(Vuex)
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store
