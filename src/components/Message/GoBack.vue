<template>
  <div>
    <van-nav-bar
      title="消息列表"
      left-text="返回"
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
      console.log(1)
      this.$router.back();
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>