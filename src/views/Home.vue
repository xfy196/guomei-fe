<template>
    <div id="app">
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

<style>

</style>