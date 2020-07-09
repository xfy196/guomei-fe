<template>
  <div>
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

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
  }
};
</script>

<style lang="stylus" scoped>
.my-swipe
  padding 0 0.041667rem
  img 
    width 1.479167rem
    height 0.541667rem
</style>
