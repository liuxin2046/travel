<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-btn">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">城市
      <span class="iconfont arrow">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/styles/variables.styl'
  .header
    line-height: .86rem
    display: flex
    background: $bgColor
    
    .header-left
      width: .64rem
      float: left
      color: #fff;
      .back-btn
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background-color: #fff
      height: .64rem
      line-height: .64rem
      border-radius: .1rem
      margin-top: 0.12rem
      margin-left: .2rem
      padding-left: .2rem
    .header-right
      color: #fff;
      width: 1.24rem
      float: right
      text-align: center
</style>
