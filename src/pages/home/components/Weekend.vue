<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list"
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
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~style/mixins.styl"
/* padding-bottom 37.09%  图片的高除以宽得出来的百分比*/
.title
  line-height .8rem
  background #eeeeee
  text-indent .2rem
.item-img-wrapper
  height 0rem
  overflow hidden
  padding-bottom 37.09%
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
