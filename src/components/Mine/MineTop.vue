<template>
  <div class="mine-top">
    <header class="mine-header">
      <van-nav-bar title="我的国美" left-arrow @click-left="onClickBack">
        <template #right>
          <SearchMenu></SearchMenu>
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
                <a href="javascript:void(0)" id="userReg" v-if="!isLogin" @click="goLogin">登录/注册</a>
                <a href="javascript:void(0)" id="userReg" v-else>{{ username }}</a>
            </p>
        </div>
      </div>
      <a class="gift" href="#"></a>
    </div>
    <MineShop :shop="shopStatus"></MineShop>
    <MineShop :shop="aboutMoney" class="about-money"></MineShop>
    <div v-if="isLogin">
      <MineVip></MineVip>

      <div class="mine-share">
        <h3>我的分享活动</h3>
        <div class="made-group">
          <span>拼团</span>
          <a href="#">好友拼单享优惠</a>
        </div>
      </div>
    </div>
    <RecommendGoods></RecommendGoods>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Grid, GridItem } from 'vant';

import MineShop from '@/Mine/MineShop'
import MineVip from '@/Mine/MineVip'
import RecommendGoods from '@/Cart/RecommendGoods'

import SearchMenu from '@/common/SearchMenu'
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      isLogin: false,
      username: '',
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
  methods: {
    onClickBack() {
      this.$router.back()
    },
    goLogin() {
      this.$router.push('/login');
    }
  },
  components : {
    MineShop,
    MineVip,
    SearchMenu,
    RecommendGoods
  },
  created() {
    let user = window.localStorage.getItem('userInfo')
    if(user){
      this.isLogin = true;
      this.username = JSON.parse(user).username;
    }
  }
}
</script>

<style lang="stylus" scoped>
.mine-top
  overflow-y scroll 
  height 100%
  width 100%
  .mine-header
    position absolute
    top 0
    left 0
    width 100%
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
      /deep/.van-nav-bar__right
        .h-right
          margin-right 0px
  .user-show
    width 100%
    margin-top 44px
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
      top 6px
      right 12px
      
      display inline-block
      width 35px
      height 28.5px
      background url(https://css.gomein.net.cn/plus/style/ucenter/css/gift.b5b6719101.gif) no-repeat
      background-size contain
      .van-icon 
        color #fff
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