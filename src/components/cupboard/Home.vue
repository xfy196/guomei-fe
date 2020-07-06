<template>
  <div id="app">
    <HomeTop></HomeTop>
    <HomeNav>
        <template slot="Swipe">
            <Swipe></Swipe>
        </template>
    </HomeNav>
  </div>
</template>

<script>
import Swipe from "@/common/Swipe";
import HomeTop from "@/Home/HomeTop";
import HomeNav from "@/Home/HomeNav";
export default {
  components: {
    Swipe,
    HomeTop,
    HomeNav
  }
};
</script>

<style>
</style>