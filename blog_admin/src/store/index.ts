import Vue from 'vue'
import Vuex from 'vuex'
import menus from './modules/menus'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   aaa:'aaaa'
  // },
  // mutations: {
  //   setA(state, val){
  //     state.aaa = val
  //   },
  // },
  // actions: {
  // },
  modules: {
    menus
  }
})
