<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :hotCities='hotCities' :cities='cities' :letter='letter'></city-list>
    <city-sort :cities='cities' @change='handleLetterChange'></city-sort>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CitySort from './components/Sort'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySort
  },
  data () {
    return {
    hotCities: [],
    cities: {},
    letter: '',
    current: '宜春'
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      console.log(res)
      res = res.data
      if (res.ret && res.data) {
        let {cities,hotCities} = res.data
        this.hotCities = hotCities
        this.cities = cities
        console.log('cities ',this.cities)
      }
    },
    handleLetterChange (letter) {
      this.letter = letter
      console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>

</style>
