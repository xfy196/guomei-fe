<template>
  <div class="comfortable">
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item class="van-swipe-item" v-for="(item,index) in swiperImages" :key="index">
        <img :src="item" class="img-item">
      </van-swipe-item>
    </van-swipe>
    <div class="comfortable-header">
      <p class="p-header">智能舒适家</p>
      <a href="#" class="a-header">
        <span class="span-header">查看更多</span>
        <van-icon name="arrow" size="15" color="#333" class="icon-header"/>
      </a>
    </div>
    <div class="comfortable-contents">
      <ul class="contents-list">
        <li>
          <img src="http://gfs5.gomein.net.cn/wireless/T1kgJ4BgJv1RCvBVdK_533_354.png" alt="" class="contents-img">
        </li>
        <li>
          <img src="http://gfs8.gomein.net.cn/wireless/T11nE4BsWv1RCvBVdK_533_354.png" alt="" class="contents-img">
        </li>
        <li>
          <img src="http://gfs7.gomein.net.cn/wireless/T1Cnh4B7hv1RCvBVdK_533_354.png" alt="" class="contents-img">
        </li>
        <li>
          <img src="http://gfs7.gomein.net.cn/wireless/T1X9V4BThT1RCvBVdK_533_354.png" alt="" class="contents-img">
        </li>
        <li>
          <img src="http://gfs7.gomein.net.cn/wireless/T1WnD4B4Vv1RCvBVdK_533_372.png" alt="" class="contents-img">
        </li>
        <li>
          <img src="http://gfs9.gomein.net.cn/wireless/T1EMb4BmbT1RCvBVdK_533_372.png" alt="" class="contents-img">
        </li>
      </ul>
    </div>
    <div class="comfortable-video">
      <div class="video-poster">
        <img src="http://gfs10.gomein.net.cn/T1yJJmB4_T1RCvBVdK.jpg" alt="" class="video-img">
        <a href="#" class="btn-play">
          <img src="../../../assets/comfortable/autoplay.png" alt="">
        </a>
      </div>
      <p>
        舒适 健康 智能 环保
      </p>
    </div>
    <ul class="comfortable-class">
      <li>
        <img src="http://gfs7.gomein.net.cn/wireless/T1b0hmBjJv1RCvBVdK_533_362.jpg" alt="">
      </li>
      <li>
        <img src="http://gfs7.gomein.net.cn/wireless/T1b0YmBmCv1RCvBVdK_533_362.jpg" alt="">
      </li>
    </ul>
    <div class="comfortable-tab">
      <div class="tab-title">
        <a href="#">为您推荐</a>
        <a href="#">金牌导购</a>
      </div>
      <van-tabs v-model="active" class="comfortable-tabchild">
        <van-tab v-for="(item,index) in tabList" :key="item" :title="item">
          <component :is="comfortablelist[index]"></component>
        </van-tab>
      </van-tabs>
      
    </div>
  </div>
</template>

<script>

import Vue from "vue";

import { Swipe, SwipeItem } from "vant";

import { Icon } from 'vant';

import { Tab, Tabs } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);

import ComfortableGoods from '@/Home/Comfortable/ComfortableGoods.vue'
import ComfortableGoods2 from '@/Home/Comfortable/ComfortableGoods-2.vue'
import ComfortableGoods3 from '@/Home/Comfortable/ComfortableGoods-3.vue'

export default {
  data() {
    return {
      swiperImages : [
        'https://gfs7.gomein.net.cn/wireless/T120Z5B4bT1RCvBVdK_1065_390.jpg',
        'http://gfs6.gomein.net.cn/wireless/T147_5BThT1RCvBVdK_1065_390.jpg',
        'https://gfs8.gomein.net.cn/wireless/T1X0K5BCVv1RCvBVdK_1065_390.jpg'
      ],
      active :0,
      comfortablelist: ["ComfortableGoods","ComfortableGoods2","ComfortableGoods3","ComfortableGoods","ComfortableGoods"],
      tabList: ['供暖系统', '国美智能', '安防系统', '中央空调', '全屋水家电', ]
    }
  },
  components : {
    ComfortableGoods,
    ComfortableGoods2,
    ComfortableGoods3
  },
};
</script>

<style lang="stylus" scoped>
.comfortable

  .my-swipe
    margin-bottom 16px
    .van-swipe-item
      .img-item 
        margin 0px 10.1px
        height 130px
        width 355px
        border-radius 5.12px

  .comfortable-header
    background #fff
    margin 0px 10.5px
    display flex
    justify-content space-between
    align-items center
    height 50px
    width 355px
    padding 6px 10.5px 
    .p-header
      font-size 18px
      color: #262c32
      letter-spacing: 0
      font-weight: 700
      line-height 1
    .a-header
      display flex 
      align-items center
      .span-header
        font-size 14px
        color: #919599
        display: inline-block
      .icon-header
        display inline-block

  .comfortable-contents
    display flex
    justify-content center
    .contents-list
      display flex
      width 100%
      width 355px
      
      flex-wrap wrap
      li
        width 50%
        .contents-img
          width 100%
  .comfortable-video
    display flex
    justify-content center
    flex-direction column
    .video-poster
      padding 10px 10px 0 10px
      position relative
      .video-img 
        width 355.2px
        height 196px
      .btn-play
        
        img 
          width 50px
          height 50px
          position absolute
          top 40%
          left 44%
    p
      padding 12px 0 15px 12px
      font-size 15px  
      background #fff
      width 355.2px
      align-self center
  .comfortable-class
    display flex
    justify-content center 
    padding 10px
    li
      img 
        width 177.6px
        height 120.6px 
  .comfortable-tab 
    .tab-title
      display flex
      justify-content center
      margin 0 10px 10px
      a
        display inline-block
        font-size 14px
        width 76px
        height 26px
        line-height 26px
        text-align center
        &:first-of-type 
          color #ffffff
          background #fa1e8c
          border-radius 16px
          margin-right 6px
        &:last-of-type
          color #000
    /deep/.comfortable-tabchild .van-tabs__wrap
      padding-right 0 
      margin 0 10px
</style>