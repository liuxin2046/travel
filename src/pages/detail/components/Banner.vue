<template>
  <div>
    <div class="banner" @click="handleBanner">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe670;</span>39
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs='gallaryImgs' v-show='showGallary' @close='handleGallaryClose'></common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from '../../../common/gallary/Gallary'
import FadeAnimation from '../../../common/fade/FadeAnimation'
export default {
  props: {
    sightName: String,
    gallaryImgs: Array,
    bannerImg: String
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
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


