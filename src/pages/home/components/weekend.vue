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
  data () {
    return {
      weekendList: [
        {id:'001',imgUrl:'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',title: '京城周末撒欢',desc: '在帝都过周末'},
        {id:'002',imgUrl:'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',title: '京城周末撒欢',desc: '在帝都过周末'},
        {id:'003',imgUrl:'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',title: '京城周末撒欢',desc: '在帝都过周末'}
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .title
    line-height: .94rem
    margin-top: .2rem
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


