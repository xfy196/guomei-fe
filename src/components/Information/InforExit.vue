<template>
  <div class="infor-exit">
    <van-button type="warning" color="#ee1955" block v-on:click = "handleExit">
      退出登录
    </van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Button } from 'vant';

Vue.use(Button);
export default {
data() {
  return {
    
  }
},
methods: {
  handleExit() {
    localStorage.removeItem('userInfo') 
    this.$router.push('/Mine')
  }
},
}
</script>

<style lang="stylus" scoped>
.infor-exit
  .van-button
    margin-top 15px
    
</style>