
<!-- 
 * @description:全球优选厨房 
 * @fileName: GlobalKitchen.vue 
 * @author: 小小荧 
 * @date: 2020-07-10 20:33:08
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div class="GlobalKitchenContainer">
      <div class="gome">
          <header class="template-header" style="background: url('//gfs7.gomein.net.cn/wireless/T18MD4B7DT1RCvBVdK_1125_150.png') left center / 100% no-repeat rgb(242, 242, 242);">
            <div>
                <div class="title">&nbsp;</div>
                <div class="subtitle"></div>
                <router-link tag="a" to="" style="display:none">查看更多</router-link>
            </div>
          </header>
          <div class="swiper-wrapper">
              <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
                </van-swipe>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from "vue"
import {Swipe, SwipeItem,Lazyload} from "vant"
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
    data(){
        return {
            images : [
                "https://gfs5.gomein.net.cn/wireless/T1nwY4Bmd_1RCvBVdK_1065_708.jpg",
                "https://gfs8.gomein.net.cn/wireless/T11wb4BKhv1RCvBVdK_1065_708.jpg",
                "https://gfs8.gomein.net.cn/wireless/T11wb4BKhv1RCvBVdK_1065_708.jpg"
            ]
        }
    }
}
</script>
<style lang="stylus" scoped>
.GlobalKitchenContainer
    margin-top .26667rem
    header 
        display flex
        justify-content space-between
        align-items center
        background-color #fff
        padding 0 .28rem
        min-height 1.33333rem
        .title
            font-size .48rem
            color #262c32
            letter-spacing 0
            line-height .48rem
            font-weight 700
.swiper-wrapper
    width 355px
    height 236px
    margin 0 auto
    .my-swipe
        width 100%
        img
            margin 0 auto
            border-radius .32rem
            overflow hidden
            width 355px
            height 236px
</style>