<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page , index) of pages" :key="index">
        <div class="icon"
        v-for="item of page"
        :key = "item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      iconList: [{
        id: '0001',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '滑雪季'
      }, {
        id: '0003',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '泡温泉'
      }, {
        id: '0004',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '动物园'
      }, {
        id: '0005',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '一日游'
      }, {
        id: '0006',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '景点门票2'
      }, {
        id: '0007',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '景点门票3'
      }, {
        id: '0008',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '景点门票4'
      }, {
        id: '0009',
        imgUrl: require('../../../photo/home1/icon1.png'),
        desc: '景点门票5'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
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
  @import "~style/varibles.styl"
  @import "~style/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        height: 100%
        display block
        margin 0 auto
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
