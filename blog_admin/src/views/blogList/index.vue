<template>
  <div class="blog-list">
    <el-button
      style="margin-bottom: 15px;"
      size="mini"
      type="primary"
      @click="$router.push({path: '/createBlog'})"
    >
      创建博客
    </el-button>
    <el-form
      :inline="true"
      :model="blogModel"
      class="demo-form-inline"
    >
      <el-form-item label="关键字">
        <el-input
          v-model="blogModel.keyWord"
          placeholder="关键字"
        />
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select
          v-model="blogModel.articleType"
          placeholder="请选择文章类型"
        >
          <el-option
            label="html"
            value="html"
          />
          <el-option
            label="js"
            value="js"
          />
          <el-option
            label="css"
            value="css"
          />
          <el-option
            label="es6"
            value="es6"
          />
          <el-option
            label="flutter"
            value="flutter"
          />
          <el-option
            label="taro"
            value="taro"
          />
          <el-option
            label="flutter"
            value="flutter"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="onSubmit"
        >
          查询
        </el-button>
      </el-form-item>
    </el-form>
    <hr>
    <Table
      :data="blogTableData"
      :column="column"
      @selectChange="selectChange"
    />

    <div class="pagination-wrap">
      <el-pagination
        :current-page="blogModel.pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="blogModel.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import Table from '@/components/tables.vue'

@Component({
  components: {
    Table
  }
})
export default class Home extends Vue {
  blogModel: object = {
    keyWord: '',
    articleType: 'html',
    pageNe: 1,
    total: 50
  }
  column: Array<any> = [
    {
      type: 'selection',
      width: '50'
    },
    {
      prop: 'title',
      label: '文章标题',
      width: '',
      tooltip: 'show-overflow-tooltip'
    },
    {
      prop: 'createDate',
      label: '创建时间',
      width: '200',
      tooltip: 'show-overflow-tooltip'
    },
    {
      prop: 'name',
      label: '作者',
      width: '100',
      tooltip: 'show-overflow-tooltip'
    },
    {
      prop: 'status',
      label: '状态',
      width: '100',
      tooltip: 'show-overflow-tooltip',
      format: (row: any) => {
        switch (row.status) {
          case 1:
            return '已开始'
            break
          case 2:
            return '进行中'
            break
          case 3:
            return '已结束'
            break
          case 4:
            return '已失效'
            break
          default:
            return '/'
            break
        }
      }
    },
    {
      prop: '',
      label: '操作',
      width: '300',
      tooltip: 'show-overflow-tooltip',
      renderToolBox: (row: any) => {
        console.log(row,'row')
        let buttons = [
          {
            text: '查看',
            size: 'mini',
            callback: (row: any) => {
              this.see(row)
            }
          },
          row.status == 4 && {
            text: '删除',
            type: 'danger',
            size: 'mini',
            callback: function(res: any) {
              console.log(res, '回调函数')
            }
          },
          (row.status == 2 || row.status == 3) && {
            text: '编辑',
            type: 'primary',
            size: 'mini',
            callback: function(res: any) {
              console.log(res, '回调函数')
            }
          },
          (row.status == 2 || row.status == 3 || row.status == 4) && {
            text: '暂停',
            type: 'primary',
            size: 'mini',
            callback: function(res: any) {
              console.log(res, '回调函数')
            }
          },
          row.status == 1 && {
            text: '上架',
            type: 'primary',
            size: 'mini',
            callback: function(res: any) {
              console.log(res, '回调函数')
            }
          },
          row.status == 0 && {
            text: '下架',
            type: 'primary',
            size: 'mini',
            callback: function(res: any) {
              console.log(res, '回调函数')
            }
          }
        ]
        console.log(buttons, 'let buttons =')
        return buttons
      }
    }
  ]
  see(row: any) {
    console.log(row, 'see')
  }
  clickHandler() {
    console.log(123465)
  }
  blogTableData: Array<any> = [
    {
      title: '1文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 1
    },
    {
      title: '2文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 2
    },
    {
      title: '3文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 3
    },
    {
      title: '4文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 4
    },
    {
      title: '4文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 0
    }
  ]
  onSubmit() {
    console.log(1346)
  }
  selectChange(list) {
    console.log(list, 'list')
  }
  handleSelectionChange() {
    console.log(456)
  }
  handleSizeChange() {
    console.log(111)
  }
  handleCurrentChange() {
    console.log(222)
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  width: 100%;
  .pagination-wrap {
    padding: 15px 0;
    text-align: right;
  }
}
</style>
