<template>
  <div class="top-tip">
    <div class="tag-list">
      <el-tabs v-model="editableTabsValue"
               type="card"
               closable
               @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs"
                    :key="item.name"
                    :label="item.title"
                    :name="item.name">
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- <el-button size="small"
               @click="addTab(editableTabsValue)">
      add tab
    </el-button> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Index extends Vue {
  editableTabsValue = "2"
  editableTabs: Array<any> = [
    {
      title: "Tab 1",
      name: "1",
      content: "Tab 1 content"
    },
    {
      title: "Tab 2",
      name: "2",
      content: "Tab 2 content"
    }
  ];
  tabIndex: any = 2;
  removeTab(targetName: string) {
    const tabs = this.editableTabs
    let activeName = this.editableTabsValue
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1];
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      });
    }
    this.editableTabsValue = activeName
    this.editableTabs = tabs.filter(tab => tab.name !== targetName)
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
  .tag-list {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    ::v-deep .el-tabs__header{
      margin-bottom: 0;
    }
    .tab-item{
      padding: 0 20px;
    }
  }
}
</style>
