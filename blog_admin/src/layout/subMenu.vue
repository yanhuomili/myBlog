<template>
  <div class="sub-menu">
    <div
      v-for="(item,index) in menuList"
      :key="index"
    >
      <!-- 有子菜单 -->
      <el-submenu
        v-if="item.children"
        :index="item.id"
        :key="item.id"
      >
        <template slot="title">
          <i class="el-icon-location" />
          <span>{{ item.label }}</span>
        </template>
        <!-- 递归自身,递归组件必须要有name值 -->
        <SubMenu :menuList="item.children" />
      </el-submenu>
      <!-- 没有子菜单 -->
      <el-menu-item
        v-else
        :index="item.id"
        :key="item.id"
      >
        {{ item.label }}
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  name:'SubMenu',
})
export default class SubMenu extends Vue{
  @Prop() menuList!: Array<any>;
  mounted() {
   console.log(this.menuList,'menuList') 
  }
}
</script>

<style lang="scss" scoped>
.sub-menu{
  ::v-deep .el-menu-item{
    min-width: 180px;
  }
}
</style>
