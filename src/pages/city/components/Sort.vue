<template>
  <div class="item-list">
    <div class="item" v-for="(item,key) of cities" :key="key">{{key}}</div>
  </div>
</template>
<script>
export default {
  name: 'CitySort',
  props: {
    cities: Object
  }
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
  