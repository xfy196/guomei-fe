<template>
  <div class="infor-top">
    <van-nav-bar
      title="用户信息"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar)
export default {
methods: {
  onClickLeft() {
    this.$router.back()
  }
},
}
</script>

<style lang="stylus" scoped>
.infor-top
  .van-nav-bar 
    /deep/.van-nav-bar__left
      i 
        color #626262
        font-size 22px
     
</style>