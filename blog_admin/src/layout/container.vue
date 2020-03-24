<template>
  <div class="container">
    <ul>
      <li style="padding: 100px 50px;" v-for="item in 20" :key="item">{{item}}dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
      <li>dssd对方说的啥地方地方放松的放松</li>
    </ul>
    

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