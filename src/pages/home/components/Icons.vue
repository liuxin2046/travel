<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="">
          </div>
          <p class="img-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      // iconList: this.iconList
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconList.forEach((item,index) => {
        const page = Math.floor(index/8)
        if (!pages[page]) {
          // 刚开始pages[0]肯定是undefined的,所以设置pages[0]=[],方便之后向里面放入值
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl'
  .icons >>> .swiper-container
    // overflow:hidden
    height:0
    padding-bottom:50%
  .icons
    padding-top: .1rem
  .icon
    position:relative
    overflow:hidden
    width:25%
    height:0
    padding-bottom:25%
    float:left
    .icon-img
      position:absolute
      top:0
      left:0
      right:0
      bottom:.44rem
      img 
        display:block
        margin:0 auto
        height:100%
    .img-desc
      position:absolute
      left:0
      right:0
      bottom:0
      line-height:.44rem
      height:.44rem
      text-align:center
      ellipsis()


</style>
