<template>
  <div>
    <van-nav-bar
      title="选择收货地址"
      left-text=""
      right-text="管理地址"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);

export default {
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {
      this.$router.push('/address')
    },
  },
}
</script>

<style lang="stylus" scoped>

</style>