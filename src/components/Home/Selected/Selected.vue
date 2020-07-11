<template>
  <div id="selected">
    <!-- swiper轮播图 -->
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 荣耀广告 -->
    <p class="show-img"><img src="http://gfs8.gomein.net.cn/wireless/T1DSd5B5VT1RCvBVdK_1125_300.png" alt=""></p>
    <!-- 新人福利 -->
    <ul class="welfare">
      <li><img src="http://gfs5.gomein.net.cn/wireless/T1FvJmB5Cv1RCvBVdK_533_363.png" alt=""></li>
      <li><img src="http://gfs5.gomein.net.cn/wireless/T1O9x4BvAT1RCvBVdK_533_363.png" alt=""></li>
    </ul>
    <!-- 商品活动 -->
    <ActivityGoods></ActivityGoods>
    
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

import ActivityGoods from '@/Home/Selected/ActivityGoods'

export default {
  data() {
    return {
      images: [
        "http://gfs5.gomein.net.cn/wireless/T1gKY5B5DT1RCvBVdK_1065_390.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1Q2C5BK_v1RCvBVdK_1065_390.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1WOY5B7xT1RCvBVdK_1065_390.jpg",
        "https://gfs7.gomein.net.cn/wireless/T1p7_5B4DT1RCvBVdK_1065_390.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1b7D5B4dT1RCvBVdK_1065_390.jpg",
      ]
    };
  },
  components: {
    ActivityGoods
  },
};
</script>

<style lang="stylus" scoped>
#selected
  padding-bottom 50px
  .my-swipe
    padding 6px 10px
    img 
      width 355px
      height 130px
      border-radius 20px
  .show-img
    width 355px
    margin 0 auto
    img 
      width 100%
  .welfare
    width 355px
    padding-top 10px
    margin  0 auto
    display flex
    li
      width 50%
      img 
        width 100%


</style>
