<template>
  <div class="search">
    <input class="search-input" placeholder="请输入城市名或拼音"/>
  </div>

</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .search
    height: .72rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing:border-box
      width: 100%
      height: .64rem
      line-height: .64rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
</style>


