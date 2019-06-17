<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item,index) of imgs" :key="index">
        <img class="gallary-img" :src="item" alt="">
      </swiper-slide>
      <!-- <swiper-slide>
        <img class="gallary-img" src="//img1.qunarzz.com/sight/p0/1707/4a/4a392610c3303490a3.water.jpg_600x330_d86beb74.jpg" alt="">
      </swiper-slide> -->
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    imgs: {
      type: Array,
      default () {
        return ['//img1.qunarzz.com/sight/p0/1707/4a/4a392610c3303490a3.water.jpg_600x330_d86beb74.jpg',
        'http://img1.qunarzz.com/tuan/team2/1507/72/a9bc623e643fbf.png_r_800x800_5144804a.png'
        ]
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        // 监听到dom节点变化自动刷新
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    .wrapper
      width: 100%
      height: 0
      padding-bottom: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        bottom: -1rem
        color: #fff
</style>

