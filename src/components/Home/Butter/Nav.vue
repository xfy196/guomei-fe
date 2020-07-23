<template>
   <div class="nav1">
       <div class="nav1_l" v-for="(item,index) in images" :key="index">
         <a href="">
           <img :src = "item" alt="">
         </a>
       </div>
       <div class="nav1_r">
         <a href="">抽烟机清洗</a>
         <a href="">冰箱清洗</a>
         <a href="">空调清洗</a>
         <a href="">微波炉清洗</a>
       </div>
   </div>
</template>

<script>

import Vue from "vue";

export default {
     
    data() {
      return {
         images: [
       
        "//gfs5.gomein.net.cn/wireless/T10eY5BvZv1RCvBVdK_342_288.png"
      ],
      }
    },
}
</script>

<style lang="stylus" scoped>
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
      height 109px
  .nav1_r
    width 233px
    float left
    height 109px
    margin-left 5px
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