<template>
  <div class="table">
    <el-table
      ref="refBlogTable"
      :data="data"
      tooltip-effect="dark"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange"
    >
      <template v-for="(item, index) in column">
        <!-- selection -->
        <el-table-column
          v-if="item.type === 'selection'"
          :key="index"
          type="selection"
          :width="item.width || 200"
        />
        <!-- 其他属性 -->
        <template v-else>
          <!-- 渲染操作列 -->
          <template v-if="item.renderToolBox">
            <el-table-column
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
              :align="item.align"
              :show-overflow-tooltip="item.tooltip"
            >
              <template slot-scope="scope">
                <el-button
                  v-for="(render, i) in item.renderToolBox(scope.row)"
                  v-show="render"
                  :key="i"
                  :type="render.type"
                  :size="render.size"
                  @click="clickHandler(render, scope.row)"
                >
                  {{ render.text }}
                </el-button>
              </template>
            </el-table-column>
          </template>
          <!-- 渲染需要format的属性 -->
          <el-table-column
            v-else-if="item.format"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :align="item.align"
            :show-overflow-tooltip="item.tooltip"
          >
            <template slot-scope="scope">
              <!-- <span>{{scope.row[item.prop]}}</span> -->
              <span>{{ item.format(scope.row) }}</span>
            </template>
          </el-table-column>
          <!-- 渲染不做任何处理的属性 -->
          <el-table-column
            v-else
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
            :align="item.align"
            :show-overflow-tooltip="item.tooltip"
          />
        </template>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  @Prop({ default: [] }) column
  @Prop({ default: [] }) data
  @Emit('selectChange') selectChange(selection) {}

  // todo 插件注释样式
  // * 插件注释样式
  // //start 代表可以删除的代码
  a: string = 'aaaa'
  // //end
  blogModel: object = {
    keyWord: '',
    articleType: 'html',
    pageNe: 1,
    total: 50
  }
  handleSelectionChange(selection) {
    this.selectChange(selection)
  }
  clickHandler(render, row) {
    render.callback(row)
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
}
</style>
