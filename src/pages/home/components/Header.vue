<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe606;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6aa;</span>
      输入城市/景点/主题
    </div>
  <!--  router-link路由跳转 -->
    <router-link to='/city'>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-right">&#xe638;</span>
    </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
//scoped
//只对当前组件有效
//1rem = html font-size = 50px
<style lang="stylus" scoped>
//在css中引入css文件用@import '~@/assets/style/varibles.styl'
@import '~style/varibles.styl'
    .header
      display:flex
      line-height: $headerHeight
      background-color :$bgColor
      color: #ffffff
      .header-left
        width: .64rem
        float: left
        .back-icon
           text-align:center
           font-size : .4rem
      .header-input
        flex: 1
        height: .64rem
        line-height: .64rem
        margin-top: .12rem
        margin-left: .2rem
        background: #fff
        border-radius: .1rem
        color: #ccc
       .header-right
         min-width: 1.04rem
         padding 0 .1rem
         float: right
         color: #fff
         text-align:center
         .arrow-right
             font-size : .24rem
             margin-left: -.04rem
</style>
