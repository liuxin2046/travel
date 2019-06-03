<template>
  <div class="header">城市选择
    <router-link to='/'>
      <div class="iconfont back-btn">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .header
    overflow:hidden
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    font-size: .32rem
    position:relative
    text-align:center
    .back-btn
      position:absolute
      width:.64rem
      top:0
      left:0
      text-align:center
      font-size: .4rem
      color:#fff
</style>

