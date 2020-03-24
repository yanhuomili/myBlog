<template>
  <div class="layout">
    <Aside/>
    <div class="container-wrap">
      <Top/>
      <Container/>
    </div>
  </div>
</template>

<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import Aside from './aside.vue'
import Container from './container.vue'
import Top from './top.vue'
@Component({
  components:{
    Aside,
    Container,
    Top
  }
})
export default class Index extends Vue{

}
</script>

<style lang="scss" scoped>
.layout{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  .container-wrap{
    width: 300px;
    flex: 1;
    flex-shrink:0;
    display: flex;
    flex-direction: column;
    position: relative;
  }
}
</style>