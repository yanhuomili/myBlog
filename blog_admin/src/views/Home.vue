<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld :msg="msg"/> -->
    <el-row>
      <el-col :span="6">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="8"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @open="handleOpen"
          @close="handleClose"
        >
          <MySubMenu :myMenuList="myMenuList" />
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import {Component,Vue} from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import MySubMenu from './MySubMenu.vue'

@Component({
  components: {
    HelloWorld,
    MySubMenu
  },
})


export default class Home extends Vue {
  msg = 'Welcome to Your Vue.js App'
  myMenuList: Array<any> = [
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
