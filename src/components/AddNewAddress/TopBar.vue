<template>
  <div>
    <van-nav-bar
      title="添加新地址"
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
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>