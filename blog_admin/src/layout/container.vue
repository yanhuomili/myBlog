<template>
  <div class="container">
    <!-- <keep-alive v-if="getKeepAlive">
      <router-view />
    </keep-alive> -->
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const menus = namespace('menus')
@Component
export default class Index extends Vue{
  @menus.Getter('getKeepAlive') getKeepAlive
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  flex: 1;
  overflow: auto;
  text-align: left;
  padding: 15px;
}
</style>