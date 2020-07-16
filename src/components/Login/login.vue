<template>
  <div id="login-page">
    <!-- 退出按钮 -->
    <van-icon name="cross" class="back-btn" color="#666666" @click="goBack"/>
    <!-- logo -->
    <div class="logo">
        <img src="https://gfs10.gomein.net.cn/wireless/T1XqAyBXb_1RCvBVdK_660_360.png" alt="">
    </div>
    <!-- 登录表单 -->
    <form action="javascript:void(0)" class="login-form">
      <input type="text" name="username" id="username" placeholder="请输入手机号">
      <input type="text" name="password" id="password" placeholder="请输入密码">
      <div class="agreement">
        <van-checkbox v-model="checked" shape="square">复选框</van-checkbox>
        <span>未注册手机验证后自动注册,我已阅读并同意</span>
        <a href="javascript:void(0)">《国美平台服务协议》</a>
        <a href="javascript:void(0)">《国美平台隐私政策》</a>
        <a href="javascript:void(0)">《美付宝服务协议》</a>
      </div>
    </form>
    <!-- 登录选择项 -->
    <div class="options">
      <p>手机号登录</p>
      <p>新用户注册</p>
    </div>
    <!-- 第三方登录方式 -->
    <div class="login-type">
      <p>其他登录方式，请关注第三方的用户隐私协议</p>
      <ul>
        <li>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt="">
        </li>
        <li>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/zfb.png" alt="">
        </li>
        <li>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/weibo.png" alt="">
        </li>
        <li>
          <img src="https://misc.gomein.net.cn/plus/images/u/login_new/mdhy.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon, Checkbox, CheckboxGroup } from 'vant';
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  },
}
</script>

<style lang="stylus" scoped>
#login-page
  height 100%
  background-color #ffffff
  padding 0 30px
  .back-btn
    position absolute
    top 10px
    left  10px
  .logo
    text-align center
    img 
      width 220px
      height 120px
  .login-form
    display flex
    flex-direction column
    input 
      border none
</style>