<template>
  <div class="sub-menu">
    <div
      v-for="(item, index) in menuList"
      :key="index"
    >
      <!-- 有子菜单 -->
      <el-submenu
        v-if="item.children"
        :key="item.id"
        :index="item.id + ''"
      >
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ item.label }}</span>
        </template>
        <!-- 递归自身,递归组件必须要有name值 -->
        <SubMenu :menu-list="item.children" />
      </el-submenu>
      <!-- 没有子菜单 -->
      <el-menu-item v-show="!item.meta.hidden"
        v-else
        :key="item.id"
        :index="item.id + ''"
        @click="changeRouterFn(item)"
      >
        {{ item.label }}
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Mutation, namespace } from 'vuex-class'
const menus = namespace('menus')
@Component({
  name: 'SubMenu'
})
export default class SubMenu extends Vue {
  @Prop() menuList!: Array<any>
  @menus.Getter('getTabList') getTabList
  @menus.Getter('getMenuActiveIndex') getMenuActiveIndex
  @menus.Getter('getMenuList') getMenuList
  @menus.Getter('getCurrentMenu') getCurrentMenu
  @menus.Mutation('setMenuActiveIndex') setMenuActiveIndex
  @menus.Mutation('setTabList') setTabList
  @menus.Mutation('setCurrentMenu') setCurrentMenu

  initCurrentMenu(index, menuList) {
    let tab = {}
    this.getMenuList.forEach(element => {
      if (element.id == this.getMenuActiveIndex) {
        tab = element
        return tab
      }
    })
    return tab
  }
  created() {
    /* 第一次进来页面设置默认的tab */
    const tab = this.initCurrentMenu(this.getMenuActiveIndex, this.getMenuList)
    this.setTabList([tab])
    this.setCurrentMenu(tab)
  }
  changeRouterFn(route) {
    /* 点击当前菜单不做任何处理 */
    if (this.$route.path == route.path && this.getTabList.length !== 0) {
      return
    }
    this.$router.push({ path: route.path })
    this.setMenuActiveIndex(route.id)
    this.setCurrentMenu(route)

    /* tab上面是否打开过 */
    const bool = this.isInTabList(this.getCurrentMenu, this.getTabList)
    if (!bool) {
      this.setTabList([this.getCurrentMenu])
    }
  }
  isInTabList(tab, tabList) {
    return tabList.some(item => tab.id == item.id)
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {
  ::v-deep .el-menu-item {
    min-width: 180px;
  }
}
</style>
