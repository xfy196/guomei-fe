<template>
  <div class="mine-top">
    <header class="mine-header">
      <van-nav-bar title="我的国美" left-arrow>
        <template #right>
          <van-icon name="weapp-nav" size="22" color="#333"/>
        </template>
      </van-nav-bar>
    </header>
    <div class="user-show">
      <div class="user-infor">
        <a href="#" class="user-head">
            <img id="user-img" src="http://js.gomein.net.cn/plus/plus-public//images/public/shopdefault.jpg">
        </a>
        <div class="login-reg">
            <p>
                <a href="#" id="userReg">登录/注册</a>
            </p>
        </div>
      </div>
      <a class="gift" href="#">
        
      </a>
      <a href="#" class="message-btn">

      </a>
    </div>
    <div class="shop-status">
      <van-grid :border="false">
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="flower-o" text="待评价" />
        <van-grid-item icon="refund-o" text="退款/售后" />
      </van-grid>
      <div class="all-order">
        <b></b>
        <img class="order-img" src="//app.gomein.net.cn/plus/images/ucenter/dingdan.png?v=2017092001">
        <span>全部订单</span>
        <i>查看电子发票</i>
      </div>
    </div>
    <div class="about-money">
      <van-grid :border="false">
        <van-grid-item icon="gold-coin-o" text="国美币" />
        <van-grid-item icon="discount" text="优惠券" />
        <van-grid-item icon="points" text="美豆" />
        <van-grid-item icon="credit-pay" text="交通卡" />
      </van-grid>
      <div class="my-wallet">
        <b></b>
        <img class="wallet-img" src="http://app.gomein.net.cn/plus/images/ucenter/qianbao.png?v=2017092001">
        <span>我的钱包</span> 
      </div>
    </div>
    <div class="vip-center">
      <van-grid :border="true" :column-num="4">
        <van-grid-item>
          <van-image src="http://app.gomein.net.cn/plus/images/ucenter/huiyuanbu.png?v=2017092001" />
          <span>会员俱乐部</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="http://app.gomein.net.cn/plus/images/openMembershipCard/viphuiyuanka.png?v=2017092000" />
          <span>我的会员卡</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="http://app.gomein.net.cn/plus/images/ucenter/shoucang.png?v=2017092001" />
          <span>我的收藏</span>
        </van-grid-item>
        <van-grid-item>
          <van-image src="http://app.gomein.net.cn/plus/images/ucenter/fapiaozhushou.png" />
          <span>发票助手</span>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
export default {

}
</script>

<style lang="stylus" scoped>
.mine-top
  .mine-header
    width 375px
    height 44px  
    .van-nav-bar
      color #333
      /deep/.van-nav-bar__title
        font-size 18px 
        color #333
      /deep/.van-nav-bar__left
        i 
          color #626262
          font-size 22px
  .user-show
    width 375px
    height 122px
    background url(https://css.gomein.net.cn/plus/style/ucenter/css/userBg.47888ca02e.png) center no-repeat
    background-size 100%
    padding 33.5px 90px 28.5px 25px
    position relative
    .user-infor
      display flex
      justify-content flex-start
      align-items center
      .user-head
        img
          width 51px
          height 51px
          border 2px solid #fff
          border-radius 51px
      .login-reg
        a
          color #ffffff
          font-weight 700
          font-size 18px
          margin-left 20px
    .gift
      position absolute
      top 4px
      right 48px
      
      display inline-block
      width 35px
      height 28.5px
      background url(https://css.gomein.net.cn/plus/style/ucenter/css/gift.b5b6719101.gif) no-repeat
      background-size contain
    .message-btn
      position absolute
      display inline-block
      top 13px
      right 15px
      width 20.5px
      height 19px
      background url(https://css.gomein.net.cn/plus/style/ucenter/css/messageIcon.e66ecc9715.png) no-repeat
      background-size contain
  .shop-status
    display flex
    margin-bottom 11.5px
    .van-grid
      height 96px
      .van-grid-item
        width 75px
        color #666
    .all-order
      box-sizing border-box
      width 75px
      height 96px  
      display flex
      flex-direction column
      align-items center
      padding 17.5px 0
      background #fcfcfc
      b
        background url(http://app.gomein.net.cn/plus/images/ucenter/jiantou.png?v=2017092001) no-repeat
        width 9px
        height 9px
        display inline-block
        position absolute
        z-index 888
        width: 40px;
        height: 40px;
        top: 300px;
        left: 293px;
      .order-img 
        width 24.5px
        height 24.5px
      span 
        font-size 13px
        color #666
        margin-top 5px
      i 
        font-size 10px
        color #999
        margin-top -2px
  .about-money
    margin-bottom 11.5px
    display flex
    position relative
    .van-grid
      height 83px
      .van-grid-item
        width 75px
        color #666
    .my-wallet
      box-sizing border-box
      width 75px
      height 86px  
      display flex
      flex-direction column
      align-items center
      padding 17.5px 0
      background #fcfcfc
      b
        background url(http://app.gomein.net.cn/plus/images/ucenter/jiantou.png?v=2017092001) no-repeat
        width 9px
        height 9px
        display inline-block
        position absolute
        z-index 888
        width: 40px;
        height: 40px;
        top: 20px;
        left: 293px;
      .wallet-img 
        width 24.5px
        height 24.5px
      span 
        font-size 13px
        color #666
        margin-top 5px  
</style>