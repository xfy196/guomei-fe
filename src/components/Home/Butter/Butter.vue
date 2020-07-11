<template>
  <div class="Butter">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="van-swipe-item" v-for="(item,index) in bannerimages" :key="index">
        <a href>
          <img :src="item" alt="">
        </a>
      </van-swipe-item>
    </van-swipe>
    <!--   tupian -->
   
      <div class="content">
        <div class="content-1">
          <a href="">
          <img src="//gfs5.gomein.net.cn/wireless/T1mfd4BXbv1RCvBVdK_352_200.png" alt="">
          </a>
          </div>
        <div class="content-2">
          <a href="">
          <img src="//gfs8.gomein.net.cn/wireless/T1PgCmBgYv1RCvBVdK_352_200.png" alt="">
          </a>
          </div>
      </div>
      <!-- 导航 -->
    
       <navimages></navimages>
     
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, List } from "vant";
import Nav from "Butter/Nav"
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
     components:navimages
    return {
      bannerimages: [
        "http://gfs8.gomein.net.cn/wireless/T1CLZmBb_T1RCvBVdK_1053_375.jpg",
        "http://gfs9.gomein.net.cn/wireless/T1fixmBjLv1RCvBVdK_1053_375.jpg",
        "http://gfs5.gomein.net.cn/wireless/T17GC5BbVT1RCvBVdK_1053_375.jpg",
        "http://gfs7.gomein.net.cn/wireless/T1LnE5BybT1RCvBVdK_1000_356.jpg"
      ],
     
        images:[
          "//gfs5.gomein.net.cn/wireless/T1Geb5BsxT1RCvBVdK_342_288.png",
         "//gfs6.gomein.net.cn/wireless/T1w9E5B7VT1RCvBVdK_342_288.png",
         "//gfs9.gomein.net.cn/wireless/T1MTd5B_Kv1RCvBVdK_342_288.png",
         "//gfs7.gomein.net.cn/wireless/T1r9h5BCWT1RCvBVdK_342_288.png",
         "//gfs5.gomein.net.cn/wireless/T1Geb5BsxT1RCvBVdK_342_288.png",
         "//gfs5.gomein.net.cn/wireless/T10eY5BvZv1RCvBVdK_342_288.png",
         "//gfs5.gomein.net.cn/wireless/T10eY5BvZv1RCvBVdK_342_288.png"
        ],
    };
  }
};
</script>

<style lang="stylus" scoped>

.my-swipe
  width 355px
  height 139px
  // margin 0.2667rem
  border-radius 0.32rem 
  margin 0 auto
  img  
    width 355px
    height 127px
.content 
  width 355px
  height 110px
  margin 0 auto
  img 
    width 100% 
  .content-1,.content-2
   width 177px
   float left  

.nav1
  width 355px
  height 109px
  margin-left .2667rem
  margin-right .2667rem
  margin-top .2667rem
 
  .nav1_l
    width 117px
    float left
    img
      width 100%
  .nav1_r
    width 233px
    float left
    height 109px
  .nav1_r
    a 
      float: left;
      width: 3.04rem;
      height: 1.45333rem;
      line-height: 1.41333rem;
      padding-left: 1.06667rem;
      font-size: .32rem;
      color: #333;
      background: #fff;
      display: block;
      background-repeat: no-repeat;
      background-size: .74667rem;
      background-position: .29333rem .29333rem;
      border-bottom: 1px solid #f2f2f2;
      background-image url("http://gfs9.gomein.net.cn/wireless/T1k7Y4B_Jv1RCvBVdK_84_84.png")


</style>
  
