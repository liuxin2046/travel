<template>
  <!-- <div>this is detail</div> -->
  <div>
    <detail-banner :sightName='sightName' :gallaryImgs='gallaryImgs' :bannerImg='bannerImg'></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json',{
      params: {
        id: this.$route.params.id
      }}).then(this.handleDetailSucc)
    },
    handleDetailSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        const {sightName,bannerImg,gallaryImgs,categoryList} = data
        this.sightName = sightName
        this.bannerImg = bannerImg
        this.gallaryImgs = gallaryImgs
        this.list = categoryList
        // console.log(data)
      }
    }
  },
  mounted () {
    // 不会缓存，每次进入都会执行
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .content
    height: 50rem
</style>

