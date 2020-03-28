<template>
  <div class="edit-blog">
    <editor :isEdit="true"></editor>
  </div>
</template>

<script lang="ts">
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import editor from './components/editor.vue'

@Component({
  components: {
    editor
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
  .edit-blog{
    width: 100%;
  }
</style>
