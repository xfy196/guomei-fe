<template>
  <div>
    <van-nav-bar
      title="选择城市"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
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

</style>