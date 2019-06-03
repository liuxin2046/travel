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
  data() {
    return {
      swiperList: [{id:'001',imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/aef5f8864f5a1167599609307571b2c4.jpg_750x200_db7bedbe.jpg'},
      {id:'002',imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6fe8e24861b0b17602dfe68db88f453b.jpg_750x200_22c2868c.jpg'},
      {id:'003',imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/6ab65be3878a5ea365514cf3a8125fd1.jpg_750x200_7b2fe404.jpg'}
      ],
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

