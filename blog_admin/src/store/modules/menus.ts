import Vue from 'vue'
import Vuex from 'vuex'
import { Commit } from 'vuex'

Vue.use(Vuex)

const state: any = {
  menuList: [{ label: 'label', value: 'value' }], // 用户菜单
  menuActiveIndex: 999, // 当前打开菜单的下标
  tabList: [], // 当前打开过的标签
  currentMenu: {}, // 当前页面的菜单
  keepAlive: false
}
const getters: any = {
  getMenuList(state: any) {
    return state.menuList
  },
  getMenuActiveIndex(state: any) {
    return state.menuActiveIndex + ''
  },
  getTabList(state: any) {
    return state.tabList
  },
  getCurrentMenu(state: any) {
    return state.currentMenu
  },
  getKeepAlive(state: any) {
    return state.keepAlive
  }
}
const mutations: any = {
  setMenuFn(state: any, menuList: Array<any>) {
    state.menuList = menuList
  },
  setMenuActiveIndex(state: any, index: number) {
    state.menuActiveIndex = index
  },
  setTabList(state: any, tabList: Array<any>) {
    state.tabList = state.tabList.concat(tabList)
  },
  setCurrentMenu(state: any, currentMenu: object) {
    state.currentMenu = currentMenu
  },
  updateTabList(state: any, tabList: Array<any>) {
    state.tabList = tabList
  },
  setKeepAlive(state: any, keepAlive: boolean) {
    state.keepAlive = keepAlive
  }
}
const actions: any = {
  updateMenuFN(context: { commit: Commit }, menuList: Array<any>) {
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
