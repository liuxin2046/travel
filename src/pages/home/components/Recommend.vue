<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag='li' :to="'/detail/'+item.id" class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      // recommendList: this.recommendList
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    line-height: .94rem
    margin-top: .2rem
    background: #ddd
    padding-left: .2rem
    font-size: .32rem
    color: #212121
  .item
    display: flex
    padding: .22rem
    .item-img
      width: 2rem
      height: 2rem
    .item-info
      flex: 1
      padding-left: .22rem
      min-width: 0
      .item-title
        margin-top: .26rem
        line-height: .44rem
        ellipsis()
      .item-desc
        line-height: .44rem
        color: #ccc
        ellipsis()
      .item-button
        margin-top: .2rem
        background: #ff9300
        padding: 0 .1rem
        border-radius: .06rem
        color: #fff
</style>


