<template>
  <div class="Butter">
    <button @click="goList">去列表页</button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="van-swipe-item" v-for="(item,index) in bannerimages" :key="index">
        <a href>
          <img :src="item" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!--   tupian -->

    <div class="content">
      <div class="content-1">
        <a href>
          <img src="//gfs5.gomein.net.cn/wireless/T1mfd4BXbv1RCvBVdK_352_200.png" alt />
        </a>
      </div>
      <div class="content-2">
        <a href>
          <img src="//gfs8.gomein.net.cn/wireless/T1PgCmBgYv1RCvBVdK_352_200.png" alt />
        </a>
      </div>
    </div>
    <!-- 导航 -->
    <!-- <component :is="images[index]"></component> -->
    <Navs v-for="(item,index) in images" :key="index" >
      
    </Navs>
    <!--图片导航 -->
    <div class="picnav">
      <div>
        <a href>
          <img src="//gfs6.gomein.net.cn/wireless/T1s7AmBCAv1RCvBVdK_351_205.png" alt />
        </a>
      </div>
      <div>
        <a href>
          <img src="//gfs5.gomein.net.cn/wireless/T10NC4B7_T1RCvBVdK_351_205.png" alt />
        </a>
      </div>
      <div>
        <a href>
          <img src="//gfs6.gomein.net.cn/wireless/T1rNE4BCAg1RCvBVdK_351_205.png" alt />
        </a>
      </div>
      <div>
        <a href>
          <img src="//gfs7.gomein.net.cn/wireless/T1UNx4BsDv1RCvBVdK_351_205.png" alt />
        </a>
      </div>
    </div>
    <!-- 大家都在买 -->
    <div>
      <div class="headenav"></div>
    </div>
    <!-- 路由导航 -->
    <div>
      <van-tabs>
        <van-tab v-for="index in items" :title="index" :key="index">
          <goods1>22</goods1>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 商品内容 -->
    <div>
      
      <section class="gui-waterfall-double-goods-item gui-waterfall-double-item">
        <a
          href=""
          table-id="tag1"
          scheme-type-id="0"
          scheme-id="1130808761"
          data-code="23783076-0"
          class="item-link"
        >
          <div class="gome-bg goods-img">
            <img
              data-src="//gfs17.gomein.net.cn/T1i9YmBjVv1RCvBVdK_260.jpg"
              src="//gfs17.gomein.net.cn/T1i9YmBjVv1RCvBVdK_260.jpg"
              lazy="loaded"
            />
          </div>
          <div class="store-info">
            <img
              data-src="//gfs10.gomein.net.cn/T1kXb4BCZg1RCvBVdK.png"
              src="//gfs10.gomein.net.cn/T1kXb4BCZg1RCvBVdK.png"
              lazy="loaded"
            />
            <span class="name">北京国美北太店</span>
          </div>
          <div class="goods-info">
            <p class="desc">
              <span class="goods-tag-bg">
                <span>自营</span>
              </span>
              <span class="text">国美管家空调加氟 家庭空调加氟服务 1.5P及以下 全国上门服务</span>
            </p>
          </div>
        </a>
        <div class="goods-other">
          <div class="goods-tag-list"></div>
          <p class="price-cart">
            <span class="price">
              <small>¥</small>
              <big>149</big>
              <span></span>
            </span>
            <!---->
          </p>
          <!---->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, List, Tab, Tabs } from "vant";
import Navs from "@/Home/Butter/Nav";

import { Lazyload } from "vant";

Vue.use(Lazyload);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(Tab);
Vue.use(Tabs);
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
      ],

      images: [
        "//gfs5.gomein.net.cn/wireless/T1Geb5BsxT1RCvBVdK_342_288.png",
        "//gfs6.gomein.net.cn/wireless/T1w9E5B7VT1RCvBVdK_342_288.png",
        "//gfs9.gomein.net.cn/wireless/T1MTd5B_Kv1RCvBVdK_342_288.png",
        "//gfs7.gomein.net.cn/wireless/T1r9h5BCWT1RCvBVdK_342_288.png",
        "//gfs5.gomein.net.cn/wireless/T1Geb5BsxT1RCvBVdK_342_288.png",
        "//gfs5.gomein.net.cn/wireless/T10eY5BvZv1RCvBVdK_342_288.png",
        "//gfs5.gomein.net.cn/wireless/T10eY5BvZv1RCvBVdK_342_288.png"
      ],
      active: 2,
      items: ["服务精选", "清洗服务", "维修服务", "保洁服务", "家居保养"]
    };
  },
  components: { Navs },
  methods: {
    goList(){
      this.$router.push('/list');
    }
  },
};
</script>

<style lang="stylus" scoped>
.my-swipe {
  width: 355px;
  height: 139px;
  // margin 0.2667rem
  border-radius: 0.32rem;
  margin: 0 auto;

  img {
    width: 355px;
    height: 127px;
  }
}

.content {
  width: 355px;
  height: 110px;
  margin: 0 auto;

  img {
    width: 100%;
  }

  .content-1, .content-2 {
    width: 177px;
    float: left;
  }
}
.goods_p{

}

.picnav {
  width: 355px;
  height: 207px;
  border-radius: 0.32rem 0.32rem;
  overflow: hidden;
  margin-top: 0.2667rem;

  div {
    width: 177px;
    height: 103px;
    float: left;

    img {
      width: 100%;
      height: 100%;
    }
  }
}

.headenav 
  display: flex;
  overflow: hidden;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: #fff;
  padding: 0 0.28rem;
  min-height: 1.33333rem;
  background: url('//gfs8.gomein.net.cn/wireless/T1ywL5BbhT1RCvBVdK_2250_300.png') center center / 100% no-repeat rgb(242, 242, 242); // gfs8.gomein.net.cn/wireless/T1ywL5BbhT1RCvBVdK_2250_300.png) center center / 100% no-repeat rgb(242, 242, 242);


.routenav 
  height: 40px;
  align-items: center;
  display: flex;
  -ms-flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  list-style: none;
  overflow-x: scroll;
  -webkit-box-align: center;

  a {
 
    padding: 0.2rem 0.42667rem;
    position: relative;
    text-decoration: none;
    color: #333;
    cursor: pointer;
    float: left;

    .title {
      font-size: 0.42667rem;
      font-weight: 700;
      line-height: 0.53333rem;
      color: #f20c59;
    }
  }
.item-link
    width: inherit;
    display: block;
    border-radius: .21333rem .21333rem 0 0;
    overflow: hidden;
    width 175px
    height 254px
    .gome-bg 
      background-repeat: no-repeat;
      background-size: 2.66667rem;
      background-position: 50%;
      img 
         width 100%
    .store-info 
        margin: 0 .26667rem;
        height 37px
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        border-bottom: .02667rem dashed #dcddde;
        img 
          width: .42667rem;
          height: .42667rem;
          border-radius: 50%;
          display block
        span 
          display: inline-block;
          font-size: .34667rem;
          color: #7a7f85;
          margin-left: .10667rem;
          width: 90%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
    .goods-info 
        min-height: .90667rem;
        overflow: hidden;
        .desc 
          font-size: .34667rem;
          color: #262c32;
          line-height: .45333rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          line-clamp: 2;
          -webkit-line-clamp: 2;
          word-break: break-all;
          -ms-word-break: break-all;
          word-wrap: break-word;
          .goods-tag-bg 
              display: inline-block;
              line-height: .32rem;
              color: #fff;
              padding: .02667rem;
              background: -webkit-gradient(linear,left top,right top,from(#fa1e8c),to(#f20c59));
              background: linear-gradient(90deg,#fa1e8c,#f20c59);
              border-radius: .05333rem;
  .goods-other 
     margin: 5 .26667rem .32rem;
     .price-cart
        color: #f20c59;
        font-weight: 700;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center 
        font-weight: bold;
        font-size: 0.42667rem;
                 


  




</style>
  
