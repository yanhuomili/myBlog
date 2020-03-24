<template>
  <div class="side-bar">
    <el-menu
          default-active="8"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <SubMenu :menuList="menuList" />
        </el-menu>

  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import SubMenu from './subMenu.vue'

@Component({
  components:{
    SubMenu
  }
})
export default class Index extends Vue{
  menuList: Array<any> = [
      {
        label: '导航一',
        id: '1',
        children: [
          { label: '选项1', id: '2' },
          { label: '选项2', id: '3' },
          { label: '选项3', id: '4' },
          {
            label: '选项4',
            id: '5',
            children: [{
              label: '选项1',
              id: '6'
            }
            ] }
        ]
      },
      {
        label: '导航二',
        id: '7'
      },
      {
        label: '导航三',
        id: '8'
      },
      {
        label: '导航四',
        id: '9'
      }
    ]
    handleOpen(key: number, val: Array<string>) {
      console.log(key, 'key')
      console.log(val, 'val')
    }
    handleClose(key: number, val: Array<string>) {
      console.log(key, 'key')
      console.log(val, 'val')
    }

}
</script>

<style lang="scss" scoped>
.side-bar{
  width: 200px;
  height: 100%;
  border-right: 1px solid #ddd;
}
</style>