<!-- 
 * @description: 热卖商品推荐
 * @fileName: HotSellers.vue 
 * @author: 小小荧 
 * @date: 2020-07-09 20:39:04
 * @后台人员:  小小荧
 * @version: V1.0.5 
!-->
<template>
  <div class="HotContainer">
      <div class="gome">
          <header class="template-header" style="background: url('') left center / 100% no-repeat rgb(242, 242, 242);">
            <div>
                <div class="title">热卖商品推荐</div>
                <div class="subtitle"></div>
                <router-link tag="a" to="" style="display:none">查看更多</router-link>
            </div>
          </header>
          <div class="swiper-wrapper">
              <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
                </van-swipe>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Image } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Image);
export default {
    data(){
        return {
           images: [
        "https://gfs7.gomein.net.cn/wireless/T1rwY4BmL_1RCvBVdK_1065_708.jpg",
        "https://gfs6.gomein.net.cn/wireless/T1teb4B7Vv1RCvBVdK_1065_708.jpg",
        "https://gfs8.gomein.net.cn/wireless/T1S9Z4ByVT1RCvBVdK_916_614.png",
        "https://gfs7.gomein.net.cn/wireless/T1rwY4BmL_1RCvBVdK_1065_708.jpg"
      ]
        }
    },
    components : {
    }
}
</script>
<style lang="stylus" scoped>
.HotContainer
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
    img
        margin 0 auto
        border-radius .32rem
        overflow hidden
        width 355px
        height 236px
    .van-swipe
        width 100%
</style>