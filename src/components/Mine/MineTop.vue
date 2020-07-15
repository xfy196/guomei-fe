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
    <MineShop :shop="shopStatus"></MineShop>
    <MineShop :shop="aboutMoney" class="about-money"></MineShop>
    <MineVip></MineVip>

    <div class="mine-share">
      <h3>我的分享活动</h3>
      <div class="made-group">
        <span>拼团</span>
        <a href="#">好友拼单享优惠</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';

import MineShop from '@/Mine/MineShop'
import MineVip from '@/Mine/MineVip'

Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      shopStatus : 
        {
          shopDatas:[
            {
              icon : 'balance-pay',
              text : '待付款'
            },
            {
              icon : 'logistics',
              text : '待收货'
            },
            {
              icon : 'flower-o',
              text : '待评价'
            },
            {
              icon : 'refund-o',
              text : '退款/售后'
            },
          ],
          shopOrder : {
            img : '//app.gomein.net.cn/plus/images/ucenter/dingdan.png?v=2017092001',
            span : '全部订单',
            i : '查看电子发票'
          }
        },
      aboutMoney :
        {
          shopDatas:[
            {
              icon : 'gold-coin-o',
              text : '国美币'
            },
            {
              icon : 'discount',
              text : '优惠券'
            },
            {
              icon : 'points',
              text : '美豆'
            },
            {
              icon : 'credit-pay',
              text : '交通卡'
            },
          ],
          shopOrder : {
            img : 'http://app.gomein.net.cn/plus/images/ucenter/qianbao.png?v=2017092001',
            span : '我的钱包',
            i : ''
          }
        }
    }
  },
  components : {
    MineShop,
    MineVip
  }
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
  
  /deep/.about-money
    .van-grid
      height 86px
    .all-order
      height 86px

  .mine-share
    padding 0 15px
    background #fff
    h3
      font-weight 500
      font-size 15px
      color #262c32
      padding 12px 0
    .made-group
      display flex
      justify-content space-between
      line-height 35px
      padding 10px 0 24px
      span 
        height 35px
        font-size 14px
        padding-left 45px
        background url(https://css.gomein.net.cn/plus/style/ucenter/css/pt_icon.7c787bc110.png) no-repeat
        background-size 35px 35px 
      a
        font-size 12px
        color #999  
        padding-right 15px
        background url(http://app.gomein.net.cn/plus/images/ucenter/jiantou.png?v=2017092001) no-repeat center right 
        background-size 13px 13px
    
</style>