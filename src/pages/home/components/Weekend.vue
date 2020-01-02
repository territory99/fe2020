<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src='item.imgUrl'/>
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
export default{
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_256x160_6b62ea82.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_256x160_6b62ea82.jpg',
        title: '大连胜亚海洋世界',
        desc: '浪漫大连首战，浪漫的海洋主题公园'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~style/mixins.styl"
.title
  margin-top .2rem
  line-height .8rem
  background #eeeeee
  text-indent .2rem
.item-img-wrapper
  height 0rem
  overflow hidden
  padding-bottom 62.8%
.item-img
  width 100%
.item-info
  padding .1rem
.item-title
  line-height .54rem
  font-size .32rem
  ellipsis()
.item-desc
  line-height .4rem
  color: #cccccc
  ellipsis()
</style>
