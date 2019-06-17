<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button" @click="handleClick(item.name)">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  name: 'CityList',
  methods: {
    handleClick (city) {
      // this.$store.dispatch('changeCity',city)
      // this.$store.commit('changeCity',city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(element)
        this.scroll.scrollToElement(element)
      }
    }
  },
   mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper,{ mouseWheel: true, click: true, tap: true })
  },
}
</script>
<style lang="stylus" scoped>
  .border-topbottom
    // 调整1像素的颜色
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    // 调整1像素的颜色
    &:before
      border-color: #ccc
  .list
    overflow:hidden
    position: absolute
    top: 1.8rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .4rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      padding: .1rem .6rem .1rem .1rem
      overflow: hidden
      .button-wrapper
        float: left
        width: 33.33%
        .button
          text-align: center
          margin: .1rem
          border: .02rem solid #ccc
          padding: .1rem 0
          border-radius: .06rem
    .item-list
      line-height: .76rem
      padding-left: .2rem
</style>

