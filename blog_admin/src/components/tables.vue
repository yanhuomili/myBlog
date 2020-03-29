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
    <div class="pagination-wrap">
      <el-pagination
        :current-page="getPageNo"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */

import { Component, Vue, Prop, Emit } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Tables extends Vue {
  @Prop({ default: [] }) column: any
  @Prop({ default: [] }) data: any
  @Prop({ default: 1 }) pageNo: any
  @Prop({ default: [10, 20, 30, 50] }) pageSizes: any
  @Prop({ default: 10 }) pageSize: any
  @Prop({ default: 0 }) total: any
  @Emit('selectChange') selectChange(selection: any) {}
  @Emit('sizeChange') sizeChange(size: number) {}
  @Emit('currentChange') currentChange(page: number) {}

  get getPageNo() {
    return this.pageNo
  }

  blogModel: object = {
    keyWord: '',
    articleType: 'html',
    pageNe: 1,
    total: 50
  }
  handleSelectionChange(selection: Array<any>) {
    this.selectChange(selection)
  }
  clickHandler(render: any, row: any) {
    render.callback(row)
  }
  handleSizeChange(val: number) {
    this.sizeChange(val)
  }
  handleCurrentChange(val: number) {
    this.currentChange(val)
  }
}
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  .pagination-wrap {
    padding: 15px 0;
    text-align: right;
  }
}
</style>
