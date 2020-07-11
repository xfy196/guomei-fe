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
     <div class="nav1">
       <div class="nav1_l">
         <a href="">
           <img src="//gfs7.gomein.net.cn/wireless/T1jVJ4BbxT1RCvBVdK_227_210.png" alt="">
         </a>
       </div>
       <div class="nav1_r">
         <a href="">抽烟机清洗</a>
         <a href="">冰箱清洗</a>
         <a href="">空调清洗</a>
         <a href="">微波炉清洗</a>
       </div>
     </div>
     <div class="nav2">
        <div class="nav2_l">
          <a href="">
            <img src="//gfs8.gomein.net.cn/wireless/T1xpV4B5x_1RCvBVdK_225_319.png" alt="">
          </a>
        </div>
        <div class="nav2_r">
          <a href="">冰箱维修</a>
          <a href="">冰箱维修</a>
          <a href="">冰箱维修</a>
          <a href="">冰箱维修</a>
          <a href="">冰箱维修</a>
          <a href="">冰箱维修</a>
        </div>
     </div>
     <div class="nav3">
       <div class="nav3_l">
         <a href="">
           <img src="//gfs8.gomein.net.cn/wireless/T1m4V4BCY_1RCvBVdK_228_210.png" alt="">
         </a>
       </div>
       <div class="nav3_r">
           <a href="">冰箱回收</a>
           <a href="">冰箱回收</a>
           <a href="">冰箱回收</a>
           <a href="">冰箱回收</a>
       </div>
     </div>
     <div class="nav4">
       <div class="nav4_l"> 
         <a href="">
         <img src="//gfs5.gomein.net.cn/wireless/T1cpb4B5A_1RCvBVdK_227_100.png" alt=""></a>
         </div>
         <div>
           <a href="">有好货</a>
           <a href="">热门</a>
           
         </div>
     </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data() {
    return {
      bannerimages: [
        "http://gfs8.gomein.net.cn/wireless/T1CLZmBb_T1RCvBVdK_1053_375.jpg",
        "http://gfs9.gomein.net.cn/wireless/T1fixmBjLv1RCvBVdK_1053_375.jpg",
        "http://gfs5.gomein.net.cn/wireless/T17GC5BbVT1RCvBVdK_1053_375.jpg",
        "http://gfs7.gomein.net.cn/wireless/T1LnE5BybT1RCvBVdK_1000_356.jpg"
      ]
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
  margin 0 auto
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
     display  block
     width 114px
     height 54px
     float left
     width 3.04rem
     height 1.455rem
     padding-left 1.0067rem
     font-size .32rem
     color #333
     background-repeat no-repeat
     background-position .29333rem .29333rem
     borderbottom 1px solid #f2f2f2
     background url("http://gfs9.gomein.net.cn/wireless/T1k7Y4B_Jv1RCvBVdK_84_84.png")

</style>
  
