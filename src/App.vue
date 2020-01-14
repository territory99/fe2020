<template>
  <div id="app">
    <!--exclude除了这个组件，都缓存数据-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
