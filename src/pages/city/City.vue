<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-sort></city-sort>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CitySort from './components/Sort'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CitySort
  }
}
</script>
<style lang="stylus" scoped>

</style>
