<template>
  <div class="editor">
    <el-form ref="form" :rules="rules" :model="articleModel" label-width="100px">
      <el-form-item label="文章类型:" prop="type">
        <el-select v-model="articleModel.type" placeholder="请选择类型">
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
      <el-form-item label="文章标题:" prop="title">
        <el-input v-model="articleModel.title"></el-input>
      </el-form-item>
      <el-form-item label="文章描述:">
        <el-input type="textarea" v-model="articleModel.desc"></el-input>
      </el-form-item>
      <el-form-item label="文章内容:" prop="type">
        <tinymceEditor ref="tinymce" :config="config" :context="articleModel.context"></tinymceEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
    
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop } from 'vue-property-decorator'
import tinymceEditor from '@/components/tinymceEditor.vue'

@Component({
  components: {
    tinymceEditor
  }
})
export default class Home extends Vue {
  @Prop({default: true}) isEdit // 是否是编辑
  config = {
    width: '100%',
    height: 360
  }
  articleModel = {
    type: 'html',
    title: '',
    desc: '',
    context: '默认内容'
  }

  rules = {
    type: [
      { required: true, message: '请选择文章类型', trigger: 'blur' }
    ],
    title: [
      { required: true, message: '请填写文章标题', trigger: 'blur' }
    ],
    context: [
      { type: 'string', required: true, message: '请填写文章内容', trigger: 'blur' }
    ],
  }
  created() {
    if(this.isEdit){
      this.articleModel = {
        type: 'html',
        title: '第一篇博客文章',
        desc: '主要介绍博客系统开发中遇到的各种问题',
        context: '博客系统创建的初衷是。。。。。。。。。'
      }
    }
    
  }
  onSubmit(){
    this.articleModel.context = this.$refs.tinymce.getContext()
    this.$refs.form.validate((valid) => {
      console.log(valid, 'valid')
      setTimeout(() => {
        this.$router.push({path: '/blogList'})
      }, 1000);
    })
  }
}
</script>

<style lang="scss" scoped>
  .editor{
    width: 100%;
  }
</style>
