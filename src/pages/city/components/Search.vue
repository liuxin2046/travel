<template>
  <div>
    <div class="search">
      <input v-model="keyWord" class="search-input" placeholder="请输入城市名或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="item-list border-bottom" v-for="item of list" :key="item.id" @click="handleClick(item.name)">{{item.name}}</li>
        <li class="item-list border-bottom" v-show="hasNoData">未匹配到相关信息</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  props: {
    cities: Object
  },
  name: 'CitySearch',
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleClick(city) {
      // this.$store.commit('changeCity',city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyWord) != -1 || value.name.indexOf(this.keyWord) != -1) {
              result.push(value)
            }
          })
        }
        this.list = result
        console.log(this.list)
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl'
  .search
    height: .72rem
    padding: .1rem
    background: $bgColor
    .search-input
      box-sizing:border-box
      width: 100%
      height: .64rem
      line-height: .64rem
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    overflow: hidden
    z-index: 1
    position: absolute
    top: 1.79rem
    left: 0
    right: 0
    bottom: 0
    background: #fff
    .item-list
      line-height: .76rem
      padding-left: .2rem

</style>


