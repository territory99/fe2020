<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
      <div class="banner-info">
        <div class="banner-tittle">大连胜亚海洋世界</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6bc;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg', 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    display flex
    position absolute
    left 0rem
    right 0rem
    bottom 0rem
    line-height .6rem
    color #fff
    .banner-tittle
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .14rem
      padding 0 .4rem
      height .32rem
      line-height .32rem
      border-radius .2rem
      background rgba(0, 0, 0, .8)
      font-size .24rem
      .banner-icon
        font-size .24rem
</style>
