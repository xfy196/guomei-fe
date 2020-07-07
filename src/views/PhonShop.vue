<template>
   <div class="focusPhoto">
      <div class="template">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
      </div>
    </div>
</template>

<script> 
import Vue from "vue";
import { Swipe, SwipeItem,Lazyload } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

  export default {
    data() {
      return {
        images: [
          'http://gfs7.gomein.net.cn/wireless/T1w7D5Bvxv1RCvBVdK_1069_390.png',
          'http://gfs8.gomein.net.cn/wireless/T1A0V5BmxT1RCvBVdK_1063_390.jpg',
          'http://gfs8.gomein.net.cn/wireless/T1WOC5BKJv1RCvBVdK_1065_390.jpg',
          'http://gfs5.gomein.net.cn/wireless/T1QmA5BvZT1RCvBVdK_1065_390.png',
        ],
      };
  },
};

</script> 


<style lang="stylus" scoped>
.focusPhoto
  width 100%
  height .529167rem
  box-sizing border-box
  padding .0224rem 0rem
  .template
    overflow hidden
    height .483333rem
    width 100%
    box-sizing border-box
    margin  0rem .037344rem
    img
      width 1.325rem
      height .483333rem
</style>
