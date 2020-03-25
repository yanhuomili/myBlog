<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
@Component
export default class Index extends Vue{
  
}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  flex: 1;
  padding-top: 120px;
  overflow: auto;
}
</style>