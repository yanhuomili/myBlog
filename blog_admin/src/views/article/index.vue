<template>
  <div class="article-home">
    <div class="article-head">
      <ul>
        <li class="active">全部</li>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>es6</li>
        <li>vue</li>
        <li>react</li>
        <li>flutter</li>
        <li>taro</li>
        <li>flutter</li>
      </ul>
    </div>
    <div class="article-container">
      <div class="article-wrap">
        <ul class="article-list">
          <li class="article-item" v-for="(item, index) in 12" :key="index">
            <div class="article-item-head">
              <div class="create-time">2020年3月3日</div>
              <h3 class="article-title">
                这是文章的标题这是文章的标题这是文章的标题
              </h3>
            </div>
            <div class="article-item-context">
              <div class="article-text">
                这是文章的农内容
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
                独守空房技术附件都是啥地方对方身上的峰会上对方好第三方
              </div>
              <div class="article-detail" @click="articleDetail">查看</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Article extends Vue {
  articleDetail() {
    this.$router.push({ path: 'articleDetail', query: { articleId: 1 } })
  }
}
</script>
<style lang="scss">
.article-home {
  width: 100%;
  .article-head {
    width: 100%;
    background: lightskyblue;
    ul {
      max-width: 920px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      color: #fff;
      li {
        padding: 20px 15px;
        margin: 10px 10px;
        border-bottom: 2px solid transparent;
      }
      .active {
        border-bottom-color: #fff;
      }
    }
  }
  .article-container {
    max-width: 920px;
    margin: 0 auto;
    .article-wrap {
      padding: 15px;
      margin: 10px;
      .article-title {
        margin: 10px 0;
        line-height: 1.6;
      }
      .article-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .article-item {
          width: 30%;
          padding: 15px;
          margin: 25px 5px;
          border-radius: 8px;
          box-shadow: 0 5px 10px lightskyblue;
          color: #666;
          .article-text {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
          }
        }
      }
      .article-detail {
        padding: 10px 20px;
        background: lightskyblue;
        color: #fff;
        text-align: center;
        border-radius: 10px;
        margin-top: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
