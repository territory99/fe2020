<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList"
          :key="item.id">
        <img class="item-img" :src='item.imgUrl'/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://imgs.qunarzz.com/p/tts5/1605/fd/555756ef1acec0f7.jpg_r_480x320x90_13ce738d.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'http://imgs.qunarzz.com/p/tts5/1605/fd/555756ef1acec0f7.jpg_r_480x320x90_13ce738d.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0003',
        imgUrl: 'http://imgs.qunarzz.com/p/tts5/1605/fd/555756ef1acec0f7.jpg_r_480x320x90_13ce738d.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0004',
        imgUrl: 'http://imgs.qunarzz.com/p/tts5/1605/fd/555756ef1acec0f7.jpg_r_480x320x90_13ce738d.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~style/mixins.styl"
 .recommend-title
    margin-top .2rem
    line-height .8rem
    background #eeeeee
    text-indent .2rem
   .item
      overflow:hidden
      display :flex
      height :1.9rem
     .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
       .item-info
          flex 1
          padding .1rem
          min-width 0
         .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
         .item-desc
            line-height .4rem
            color: #cccccc
            ellipsis()
          .item-button
            background #ff9300
            padding 0 .2rem
            border-radius .06rem
            color #fff
            margin-top .16rem
            line-height .44rem
</style>
