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
  data () {
    return {
      iconList : [
        {id:'001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc: '景点门票'},
        {id:'002',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/f0f00d6dfe038c044dbc9a437f58b0eb.png',desc: '一日游'},
        {id:'003',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',desc: '北京必游'},
        {id:'004',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',desc: '水上乐园'},
        {id:'005',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/0334cf5430b9b5505fd79e2b8d7e8670.png',desc: '爬长城'},
        {id:'006',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',desc: '故宫'},
        {id:'007',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',desc: '动植物园'},
        {id:'008',imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20195/35d83bb968d80d54926f30cfb92cb6ff.png',desc: '限时抢购'},
        {id:'009',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',desc: '北京世园会'},
      
      ]
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
