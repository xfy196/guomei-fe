<template>
    <div id="home">
      <HomeTop></HomeTop>
      <HomeNav></HomeNav>
      <GotoTop></GotoTop>
      <CartBag></CartBag>
      <HomeTabBar></HomeTabBar>
    </div>
</template>

<script>
import HomeTabBar from "@/Home/HomeTabBar";
import HomeTop from "@/Home/HomeTop";
import HomeNav from "@/Home/HomeNav"
import GotoTop from "@/common/GotoTop"
import CartBag from "@/common/CartBag"
export default {
  components: {
    HomeTop,
    HomeNav,
    HomeTabBar,
    GotoTop,
    CartBag
  },
  created(){
    let city = window.localStorage.getItem('locationCity');
    city = city || "北京";
    this.$store.commit('changeCity', city);
  }
};
</script>
<style lang="stylus" scoped>
#home
  display flex
  flex-direction column
  height 100%
</style>