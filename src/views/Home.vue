<template>
    <div id="home">
      <HomeTop></HomeTop>
      <HomeNav></HomeNav>
      <HomeTabBar></HomeTabBar>
    </div>
</template>

<script>
import HomeTabBar from "@/Home/HomeTabBar";
import HomeTop from "@/Home/HomeTop";
import HomeNav from "@/Home/HomeNav"
export default {
  components: {
    HomeTop,
    HomeNav,
    HomeTabBar,
  }
};
</script>
<style lang="stylus" scoped>
#home
  display flex
  flex-direction column
  height 100%
</style>