<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
        <div class="title border-topbottom">B</div>
        <div class="item-list">
          <div class="item border-bottom">巴颜泽额</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
          <div class="item border-bottom">阿拉善</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    // 调整1像素的颜色
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    // 调整1像素的颜色
    &:before
      border-color: #ccc
  .list
    overflow:hidden
    position: absolute
    top: 1.8rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .4rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      line-height: .76rem
      padding-left: .2rem
</style>

