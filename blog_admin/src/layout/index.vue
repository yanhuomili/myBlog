<template>
  <div class="layout">
    <Aside />
    <div class="container-wrap">
      <NavBar />
      <Container />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Aside from './aside.vue'
import Container from './container.vue'
import NavBar from './navBar.vue'
import routers from '../router/index'
import { Mutation, Getter, namespace } from 'vuex-class'
const menus = namespace('menus')
@Component({
  components: {
    Aside,
    Container,
    NavBar
  }
})
export default class Index extends Vue {
  @menus.Getter('getMenuList') getMenuList
  @menus.Mutation('setMenuFn') setMenuFn
  created() {
    console.log(this.getMenuList, '设置前获取')
    console.log(routers.options.routes[0].children, 'routers')
    const menuList = JSON.parse(
      JSON.stringify(routers.options.routes[0].children)
    )
    menuList.forEach(element => {
      delete element.component
    })
    console.log(menuList, '克隆后 menuList')
    this.setMenuFn(menuList)
  }
  mounted() {
    console.log(this.getMenuList, '设置后获取')
    // @menus.State(state=>state.menuList) menuList
    // @menus.Mutation('setMenuFn') setMenuFn
    // @menus.Getter('menuList') getMenuList
    // list: Array<any> = [
    //   {label: '1', value: 1},
    //   {label: '2', value: 2},
    //   {label: '3', value: 3},
    //   {label: '4', value: 4}
    // ]
  }
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  .container-wrap {
    width: 300px;
    flex: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>
