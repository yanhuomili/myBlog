<template>
  <div class="side-bar">
    <el-menu
          :default-active="getMenuActiveIndex"
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
import {Getter,  namespace} from 'vuex-class' 
const menus = namespace('menus')

@Component({
  components:{
    SubMenu
  }
})
export default class Index extends Vue{
  @menus.Getter('getMenuList') menuList
  @menus.Getter('getMenuActiveIndex') getMenuActiveIndex
  handleOpen(key: number, val: Array<string>) {
    console.log(key, 'key')
    console.log(val, 'val')
  }
  handleClose(key: number, val: Array<string>) {
    console.log(key, 'key')
    console.log(val, 'val')
  }
  created() {
    console.log(this.menuList,'menuList--aside')
   console.log(this.getMenuActiveIndex, 123456)
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