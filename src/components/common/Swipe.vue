<template>
  <van-swipe width="1.395833rem" class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item class="swipe-item" v-for="(item, index) in swiperImgs" :key="index">
        <img class="swipe-img" :src="item" />
  </van-swipe-item>
</van-swipe>
</template>

<script>
import Vue from "vue"
import {Swipe, SwipeItem, Image, Lazyload  } from "vant"
Vue.use(Swipe);
Vue.use(SwipeItem)
Vue.use(Image);
Vue.use(Lazyload );
export default {
    data() {
        return {
            swiperImgs : [
                "https://gfs7.gomein.net.cn/wireless/T1mCZ5BmJv1RCvBVdK_1065_390.jpg",
                "https://gfs5.gomein.net.cn/wireless/T1MSh5B4_T1RCvBVdK_1065_390.png",
                "https://gfs8.gomein.net.cn/wireless/T1tHV4BgE_1RCvBVdK_1065_390.jpg",
                "https://gfs5.gomein.net.cn/wireless/T1gUV5B7dv1RCvBVdK_1065_390.jpg"
            ]
        }
    },
}
</script>
<style lang="stylus">
.my-swipe 
    .swipe-item
        overflow hidden
        padding 0 10px
    .swipe-img
        margin 0 auto
        border-radius .32rem
        width 355px
        height 130px
</style>