<template>
  <div class="home">
    <h2>dashborad页面</h2>
    <div class="tinymce-container">
      <tinymce-editor :id="id" v-model="tinymceContent" :init="initOptions" />
    </div>
    <div>
      <div class="title">
        title123465
      </div>
      <ul>
        <li>
          dsfdfsdfsdfsf
        </li>
        <li>
          dsfdfsdfsdfsf
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'
import tinymce from 'tinymce/tinymce'
import TinymceEditor from '@tinymce/tinymce-vue' // TinyMCE vue wrapper
import { plugins, toolbar } from './config'
import 'tinymce/tinymce'
import 'tinymce/themes/silver' // 引入主题 themes

//--------------------插入引入--------------------
import 'tinymce/themes/mobile'
import 'tinymce/plugins/advlist' // Any plugins you want to use has to be imported
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autosave'
import 'tinymce/plugins/code' //代码块插件
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/directionality'
// import 'tinymce/plugins/emoticons' // 表情符
import 'tinymce/plugins/fullscreen' // 全屏
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image' //插入上传图片插件
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/insertdatetime'
import 'tinymce/plugins/link' //超链接插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/media' // 插入视频插件
import 'tinymce/plugins/nonbreaking'
import 'tinymce/plugins/noneditable'
import 'tinymce/plugins/pagebreak'
import 'tinymce/plugins/paste'
import 'tinymce/plugins/preview'
import 'tinymce/plugins/print'
import 'tinymce/plugins/save'
import 'tinymce/plugins/searchreplace'
import 'tinymce/plugins/spellchecker'
import 'tinymce/plugins/tabfocus'
import 'tinymce/plugins/table' // 插入表格插件
import 'tinymce/plugins/template'
import 'tinymce/plugins/textpattern'
import 'tinymce/plugins/visualblocks'
import 'tinymce/plugins/visualchars'
import 'tinymce/plugins/wordcount' // 字数统计插件

@Component({
  components: {
    TinymceEditor
  }
})
export default class Home extends Vue {
  value: string = 'sdsfsdfsfs werggerh4h'
  id: string = '11'
  private toolbar: object = []
  private menubar: boolean = false
  private height: string | number = 500
  private width: string | number = '100%'
  private hasChange = false
  private hasInit = false
  private fullscreen = false

  get tinymceContent() {
    return this.value
  }
  set tinymceContent(value) {
    this.$emit('input', value)
  }

  mounted() {
    let a = 'string'
    var b = 123
  }
  get initOptions() {
    return {
      selector: `#${this.id}`,
      width: this.width,
      height: this.height,
      body_class: 'panel-body ',
      paste_data_images: true, // 允许粘贴图片、拖拽
      object_resizing: true, // 允许图片缩放
      toolbar: toolbar,
      menubar: this.menubar,
      plugins: plugins,
      // language: 'zh_CN', // 需要装汉化插件
      // language_url: `/tinymce/langs/zh_CN.js`,
      skin_url: `/tinymce/ui/oxide`, // 主题
      end_container_on_empty_block: true,
      powerpaste_word_import: 'clean',
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: 'square',
      advlist_number_styles: 'default',
      imagetools_cors_hosts: ['www.tinymce.com', 'codepen.io'],
      default_link_target: '_blank',
      link_title: false,
      nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
      init_instance_callback: (editor: any) => {
        console.log(this.value, 'this.value')
        if (this.value) {
          editor.setContent(this.value)
        }
        this.hasInit = true
        editor.on('NodeChange Change KeyUp SetContent', () => {
          this.hasChange = true
          console.log(editor.getContent(), 'editor.getContent()')
          this.$emit('input', editor.getContent())
        })
      },
      setup: (editor: any) => {
        editor.on('FullscreenStateChanged', (e: any) => {
          this.fullscreen = e.state
        })
      }
    }
  }
}
</script>

<style lang="scss">
.tinymce-container {
  width: 100%;
  position: relative;
  line-height: normal;

  .mce-fullscreen {
    z-index: 10000;
  }
}
</style>
