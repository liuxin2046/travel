<template>
  <div>
    <div class="title">周末游</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  },
  data () {
    return {
      
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    line-height: .94rem
    background: #ddd
    padding-left: .2rem
    font-size: .32rem
    color: #212121
  .item-img-wrapper
    overflow:hidden
    height:0
    padding-bottom:36.3%
  .item-img
    width: 100%
  .item-info
    padding: .2rem
    .item-title
      line-height: .48rem
      font-size: .28rem
      ellipsis()
    .item-desc
      line-height: .42rem
      font-size: .24rem
      ellipsis()
  
</style>


