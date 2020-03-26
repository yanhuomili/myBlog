<template>
  <div class="blog-list">
    <el-form :inline="true" :model="blogModel" class="demo-form-inline">
      <el-form-item label="关键字">
        <el-input v-model="blogModel.keyWord" placeholder="关键字"></el-input>
      </el-form-item>
      <el-form-item label="文章类型">
        <el-select v-model="blogModel.articleType" placeholder="请选择文章类型">
          <el-option label="html" value="html"></el-option>
          <el-option label="js" value="js"></el-option>
          <el-option label="css" value="css"></el-option>
          <el-option label="es6" value="es6"></el-option>
          <el-option label="flutter" value="flutter"></el-option>
          <el-option label="taro" value="taro"></el-option>
          <el-option label="flutter" value="flutter"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <hr>
    <el-table
      ref="refBlogTable"
      :data="blogTableData"
      tooltip-effect="dark"
      style="width: 100%"
      border
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="title"
        show-overflow-tooltip
        label="文章标题">
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="200">
        <template slot-scope="scope">{{ scope.row.createDate }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="作者"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="操作"
        width="220">
        <template slot-scope="scope">
          <el-button v-show="scope.row.status == 1" size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
          <el-button size="mini">下架</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-wrap">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="blogModel.pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="blogModel.total">
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
  blogModel: object = {
    keyWord: '',
    articleType: 'html',
    pageNe: 1,
    total: 50
  }
  blogTableData: Array<any> = [
    {
      title: '文章标题',
      createDate: '2016-05-03',
      name: '王小虎',
      status: 1
    }
  ]
  onSubmit(){
    console.log(1346)
  }
  handleSelectionChange(){
    console.log(456)
  }
  handleSizeChange(){
    console.log(111)
  }
  handleCurrentChange(){
    console.log(222)
  }
}
</script>

<style lang="scss" scoped>
  .blog-list{
    width: 100%;
    padding: 15px;
    .pagination-wrap{
      padding: 15px 0;
      text-align: right;
    }
  }
</style>
