<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1707/4a/4a392610c3303490a3.water.jpg_600x330_d86beb74.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">徐州乐园加勒比水世界</div>
        <div class="banner-number">
          <span class="iconfont">&#xe670;</span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs='imgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
  </div>
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  data () {
    return {
      showGallary: false,
      imgs: ['//img1.qunarzz.com/sight/p0/1707/4a/4a392610c3303490a3.water.jpg_600x330_d86beb74.jpg',
        'http://img1.qunarzz.com/tuan/team2/1507/72/a9bc623e643fbf.png_r_800x800_5144804a.png'
        ]
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBanner () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    background: lightblue
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      font-size: .36rem
      padding-left: .2rem
      display: flex
      align-items: center
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex: 1
      .banner-number
        width: 1.2rem
        height: .4rem
        line-height: .4rem
        background: rgba(0,0,0,.5)
        border-radius: .2rem
        text-align: center
        font-size: .24rem

</style>


