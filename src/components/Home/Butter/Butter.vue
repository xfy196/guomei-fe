
<template>
  <div class="Butter">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="van-swipe-item" v-for="(item,index) in bannerimages" :key="index">
        <a href>
          <img :src="item" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!--   tupian -->

    <div class="contentBox">
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
        <van-tab v-for="index in items" :title= "index" :key= "index" width= "50%" >
            <waterfall :data= "lists"  col = "2"  :gutterWidth= "gutterWidths" :width="itemWidth" >
             <shop v-for="(item,index)  in lists" :item="item" :key= "index" class="goods_list">
            </shop>
          </waterfall>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 商品内容 -->
    <!-- <div>
      <div class="goods_num">
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
          
          <p class="price-cart">
            <span class="price">
              <small>¥</small>
              <big>149</big>
              <span></span>
            </span>
           
          </p>
        </div>
      </section>
      </div>
    </div> -->
 
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, List, Tab, Tabs } from "vant";
import waterfall  from "vue-waterfall2"
import Navs from "@/Home/Butter/Nav";
import Shop from "@/common/shop-item-cart.vue"
import axios from 'axios'
import { Lazyload } from "vant";


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
      lists:[],
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
  
  components: { Navs, Shop },
  methods: {
    
  },
  created(){
     axios({
        url: '/api/kitchen'
      }).then((result) => {
        console.log(result)
        // this.lists=result.data.goodsList;
        this.lists = [
          ...this.lists,
          ...result.data.goodsList
        ]
        console.log(this.lists)
      })
  },
   computed:{
	      itemWidth(){  
	            return (350*0.5*(document.documentElement.clientWidth/375))  
	      },
	      gutterWidths(){
	            return (16*0.5*(document.documentElement.clientWidth/370))
	      }
   }
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

.contentBox {
  width: 355px;
  height: 110px;
  margin: 0 auto;
}
  img {
    width: 100%;
    
  }

  .content-1, {
    width: 177px;
    float: left;
    
  }
  .content-2  {
    width: 177px;
    float: left;
    padding-left: 5px;
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
  
.goods_list{
 background-color:#fff;
 margin-top:1px;
     width: 4.66667rem;
    color: #262c32;
    background-color: #fff;
    border-radius: .21333rem;
    font-size: .34667rem;
    line-height: .45333rem;
    margin-bottom: .13333rem;
    overflow: hidden;

}

</style>
  
