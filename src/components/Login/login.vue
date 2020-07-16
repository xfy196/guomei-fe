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
      <input type="text" name="username" id="username" placeholder="请输入用户名" class="inputContent" autocomplete="off" v-model="username">
      <input type="password" name="password" id="password" placeholder="请输入密码" class="inputContent" autocomplete="off" v-model="password">
      <div class="agreement">
        <input type="checkbox" name="" id="check-box" checked>
        <span>未注册手机验证后自动注册,我已阅读并同意</span>
        <a href="javascript:void(0)">《国美平台服务协议》</a>
        <a href="javascript:void(0)">《国美平台隐私政策》</a>
        <a href="javascript:void(0)">《美付宝服务协议》</a>
      </div>
      <div class="submit" @click="login">登录</div>
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
import { Icon, Checkbox, CheckboxGroup, Toast } from 'vant';
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Toast);

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    login() {
      console.log(this.username, this.password);
      if(this.username === 'admin' && this.password === 'admin'){
        window.localStorage.setItem('userInfo', JSON.stringify({
          username: this.username
        }));
        this.$router.push('/home');
      }else{
        Toast('用户名或密码错误');
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
#login-page
  position relative
  height 100%
  background-color #ffffff
  padding 3px 30px 0
  .back-btn
    position absolute
    top 10px
    left  10px
  .logo
    margin-bottom 20px
    text-align center
    img 
      width 220px
      height 120px
  .login-form
    display flex
    flex-direction column
    .inputContent 
      margin-top 4px
      border none
      border-bottom 0.5px solid #EBECED
      height 42px
      padding 10px 0
      font-size 16px
      &::-webkit-input-placeholder
        color #CACCCF
    .agreement
      margin-top 18px
      font-size 12px
      color #919599
      #check-box
        width 10px
        height 10px
        margin-right 4px     
      a
        color #78bee9
    .submit
      height 44px
      margin-top 12px
      color #fff
      background -webkit-linear-gradient(left,#FF94CB 0,#FF80AA 100%)
      border-radius 44px
      text-align center
      line-height 44px
      font-size 16px

  .options 
    display flex
    justify-content space-between
    margin-top 10px
    p   
      font-size 14px
      color #5A6066
      line-height 40px
  .login-type
    width calc(100% - 60px)
    position absolute
    bottom 0
    padding-bottom 30px
    p 
      text-align center
      font-size 12px
      color #b3b8bd
      margin-bottom 10px
    ul
      display flex
      justify-content space-around
      li
        img 
          width 36px
          height 36px
</style>