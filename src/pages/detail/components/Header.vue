<template>
  <div>
    <router-link to='/' v-show="showAbs">
      <div class="header-abs" >
        <div class="iconfont header-abs-back">&#xe624;</div>
      </div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to='/'>
        <div class="iconfont back-btn">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    text-align: center
    border-radius: .4rem
    background: rgba(0,0,0,.8)
    .header-abs-back
      color: #fff
      font-size: .4rem
      line-height: .8rem
  .header-fixed
    z-index: 2
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    font-size: .32rem
    position:fixed
    text-align:center
    top: 0
    left: 0
    right: 0
    .back-btn
      position:absolute
      width:.64rem
      top:0
      left:0
      text-align:center
      font-size: .4rem
      color:#fff
</style>
