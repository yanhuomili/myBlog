<template>
  <div class="sub-menu">
    <div
      v-for="(item, index) in menuList"
      :key="index"
    >
      <!-- 有子菜单 -->
      <el-submenu
        v-if="item.children"
        :index="item.id + ''"
        :key="item.id"
      >
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ item.label }}</span>
        </template>
        <!-- 递归自身,递归组件必须要有name值 -->
        <SubMenu :menuList="item.children" />
      </el-submenu>
      <!-- 没有子菜单 -->
      <el-menu-item
        v-else
        :index="item.id + ''"
        :key="item.id"
        @click="changeRouterFn(item)"
      >
        {{ item.label }}
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Mutation, namespace} from 'vuex-class'
const menus = namespace('menus')
@Component({
  name:'SubMenu',
})
export default class SubMenu extends Vue{
  @Prop() menuList!: Array<any>;
  @menus.Getter('getTabList') getTabList
  @menus.Getter('getMenuActiveIndex') getMenuActiveIndex
  @menus.Getter('getMenuList') getMenuList
  @menus.Mutation('setMenuActiveIndex') setMenuActiveIndex
  @menus.Mutation('setTabList') setTabList
  getCurrentMenu(index, menuList){
    let tab = {}
    this.getMenuList.forEach(element => {
      if(element.id == this.getMenuActiveIndex){
        tab = element
        return tab
      }
    })
    console.log('tabtabtabtab')
    return tab
  }
  mounted() {
    const tab = this.getCurrentMenu(this.getMenuActiveIndex, this.getMenuList)
    this.setTabList([tab])
  }
  changeRouterFn(route){
    console.log(route,'route')
    this.$router.push({path: route.path})
    this.setMenuActiveIndex(route.id)

    const tab = this.getCurrentMenu(this.getMenuActiveIndex, this.getMenuList)
    this.setTabList([tab])


  }
}
</script>

<style lang="scss" scoped>
.sub-menu{
  ::v-deep .el-menu-item{
    min-width: 180px;
  }
}
</style>
