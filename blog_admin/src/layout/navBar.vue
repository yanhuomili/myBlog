<template>
  <div class="top-tip">
    <div class="global-tool"></div>
    <div class="tag-list">
      <el-tabs
        @tab-remove="removeTab"
        closable
        style="width:100%"
        type="card"
        v-model="editableTabsValue"
      >
        <el-tab-pane
          :key="item.id"
          :label="item.label"
          :name="item.id + ''"
          v-for="item in getTabList"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const menus = namespace('menus')
@Component
export default class NavBar extends Vue {
  @menus.Getter('getTabList') getTabList
  @menus.Getter('getMenuActiveIndex') getMenuActiveIndex
  @menus.Getter('getMenuList') getMenuList
  @menus.Getter('getCurrentMenu') getCurrentMenu
  @menus.Mutation('updateTabList') updateTabList
  @menus.Mutation('setMenuActiveIndex') setMenuActiveIndex
  @menus.Mutation('setCurrentMenu') setCurrentMenu

  editableTabsValue = ''

  @Watch('$route')
  routeChange(oldVal, newVal) {
    /* 路由变化重置tab的active项 */
    this.editableTabsValue = this.getMenuActiveIndex
  }
  created() {
    this.editableTabsValue = this.getMenuActiveIndex
  }
  removeTab(targetName: string) {
    let activeName = this.editableTabsValue
    if (activeName === targetName) {
      this.getTabList.forEach((tab, index) => {
        if (tab.id == targetName) {
          const nextTab =
            this.getTabList[index + 1] || this.getTabList[index - 1]
          if (nextTab) {
            activeName = nextTab.id + ''
            this.setMenuActiveIndex(nextTab.id)
            this.setCurrentMenu(nextTab)
          } else {
            const defaultMenu = {
              id: 999,
              path: '/dashboard',
              name: 'Dashboard',
              label: '首页展示',
              meta: {
                activeTab: false
              }
            }
            this.setMenuActiveIndex(999)
            this.setCurrentMenu(defaultMenu)
            this.$router.push({ path: defaultMenu.path })
          }
        }
      })
    }
    this.editableTabsValue = activeName
    const editableTabs = this.getTabList.filter(tab => tab.id != targetName)
    this.updateTabList(editableTabs)
  }
}
</script>

<style lang="scss" scoped>
.top-tip {
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding: 0 20px;
  .global-tool {
    width: 100%;
    height: 60px;
    background: lightblue;
  }
  .tag-list {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    ::v-deep .el-tabs__header {
      margin-bottom: 0;
    }
    ::v-deep .el-tabs--card > .el-tabs__header .el-tabs__item {
      border-bottom: 1px solid #e4e7ed;
    }
    ::v-deep .el-tabs--card > .el-tabs__header {
      border-bottom: 1px solid transparent;
    }
  }
}
</style>
