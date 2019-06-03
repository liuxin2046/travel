<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key='item.id'>
        <img class="swiper-img" :src= 'item.imgUrl' alt=''>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      // swiperList: this.swipperList,
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #ffffff !important
.wrapper {
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 26.7%
  .swiper-img {
    width: 100%;
  }
}
</style>

