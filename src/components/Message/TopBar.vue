<template>
  <div>
    <van-nav-bar
      title="消息列表"
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
      this.$router.push('/home');
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>