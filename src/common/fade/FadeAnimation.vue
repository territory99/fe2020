<template>
  <transition>
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'FadeAnimation'
  // 渐隐渐显效果
}
</script>
<style lang="stylus" scoped>
.v-enter, .v-leave-to
  opacity 0
.v-enter-active, .v-leave-active
  transition opacity .5s
</style>
