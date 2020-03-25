import Vue from 'vue'
import Vuex from 'vuex'
import {Commit} from 'vuex'

Vue.use(Vuex)

const state: any = {
  menuList: [{label: 'label', value: 'value'}],
  menuActiveIndex: 2,
  tabList: []
}
const getters: any = {
  getMenuList(state: any){
    return state.menuList
  },
  getMenuActiveIndex(state: any){
    return state.menuActiveIndex + ''
  },
  getTabList(state: any){
    return state.tabList
  },

}
const mutations: any = {
  setMenuFn(state: any,menuList: Array<any>){
    state.menuList = menuList
  },
  setMenuActiveIndex(state: any, index: number){
    state.menuActiveIndex = index
  },
  setTabList(state: any,tabList: Array<any>){
    state.tabList = state.tabList.concat(tabList)
  },
}
const actions: any = {
  updateMenuFN(context: {commit: Commit}, menuList: Array<any>){
    context.commit('setMenuFn', menuList)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
