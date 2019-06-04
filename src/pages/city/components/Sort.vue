<template>
  <div class="item-list">
    <div class="item">A</div>
    <div class="item">B</div>
    <div class="item">C</div>
    <div class="item">D</div>
    <div class="item">E</div>
    <div class="item">F</div>
    <div class="item">G</div>
    <div class="item">H</div>
  </div>
</template>
<script>
export default {
  name: 'CitySort'
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .item-list
    position: absolute
    top: 1.8rem
    right: 0
    bottom: 0
    width: .6rem
    display: flex
    flex-direction: column
    justify-content: center
    .item
      line-height: .42rem
      text-align: center
      color: $bgColor
</style>
