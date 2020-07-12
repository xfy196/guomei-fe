<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    >
      <template #title>
        <div  class="center">
          <p>购物车</p>
          <div class="location">
            <van-icon name="location-o" />
            <span>北京市</span>
          </div>
        </div>
      </template>
      <template #right>
        <div class="right">
          <p>编辑</p>
          <van-icon name="ellipsis" size="30"/>
        </div>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);

export default {
  methods: {
    onClickLeft(){
      this.$router.back();
    }
  }
}
</script>

<style lang="stylus" scoped>
.center
  display flex
  align-items center
  .location
    margin-left 4px
    font-size 12px
.right
  display flex
  align-items center
  p 
    font-size 14px
    margin-right 6px
</style>