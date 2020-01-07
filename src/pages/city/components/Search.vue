<template>
  <div>
    <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配的数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default{
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
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
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('./')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~style/varibles.styl"
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    width 100%
    height .62rem
    line-height .62rem
    color #666
    text-align center
    border-radius .06rem
    padding 0 .1rem
    box-sizing border-box
.search-content
  z-index: 1
  overflow hidden
  position absolute
  top 1.58rem
  left: 0rem
  right 0rem
  bottom 0rem
  background-color #eeeeee
  .search-item
    line-height .62rem
    padding-left .2rem
    background #ffffff
    color #666
</style>
