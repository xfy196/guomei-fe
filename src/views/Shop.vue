<template>
  <div id="shop">
      <Store></Store>
      <HomeTabBar></HomeTabBar>
    </div>
</template>

<script>
import HomeTabBar from '@/Home/HomeTabBar'
import Store from '@/Home/PhoneShop/common/stores'

export default {
  components: {
    HomeTabBar,
    Store
  }
}
</script>

<style lang="stylus" scoped>
#shop
  height 100%
</style>