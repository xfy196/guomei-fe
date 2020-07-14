<template>
  <div id="selectCity">
    <!-- 顶部导航栏 -->
    <TopBar></TopBar>
    <!-- 城市选择栏 -->
    <IndexBar></IndexBar>
  </div>
</template>

<script>
import TopBar from '@/SelectCity/TopBar'
import IndexBar from '@/SelectCity/IndexBar'
export default { 
  components: {
    TopBar,
    IndexBar
  }
}
</script>

<style lang="stylus" scoped>
#selectCity
  height 100%
</style>