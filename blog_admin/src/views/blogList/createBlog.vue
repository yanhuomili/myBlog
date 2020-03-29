<template>
  <div class="create-blog">
    <editor :isEdit="false"></editor>
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
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.create-blog {
  width: 100%;
}
</style>
