<template>
  <div >
    <div class="part">
              <!-- swper 轮播 -->
      <div class="focusPhoto">
        <div class="template">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <!-- 九宫格 -->
      <div class="Gongge">
        <van-grid :column-num="4" :border="false">
          <van-grid-item
            v-for="value in icons"
            :key="value.id"
            :icon="value.iconimgs"
            :text="value.text"
          />
        </van-grid>
      </div>
      <!-- 广告 -->
      <div class="advertisement">
        <img src="http://gfs9.gomein.net.cn/wireless/T1MKL5ByJv1RCvBVdK_1065_284.png" alt />
      </div>
      <!-- 秒杀 -->
      <div class="Spike">
        <header>
          <img src="http://gfs6.gomein.net.cn/wireless/T1SnY4B4dv1RCvBVdK_1065_150.png" alt />
        </header>
        <van-tabs>
          <van-tab>
            <template #title>
              <div>
                  <p>16:00</p>
              </div>
            </template>
            <div class="goods-multiple-wrapper">
              <MyTabs :url="coming"></MyTabs>
            </div>
          </van-tab>
          <van-tab>
            <template #title>
              <div>
                  <p>15:00</p>
              </div>
            </template>
            <div class="goods-multiple-wrapper">
              <MyTabs :url="coming"></MyTabs>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <!-- 品牌推荐 -->
      <div class="brand">
          <header>
            <h5>品牌推荐</h5>
        </header>
        <section>
          <ul class="left-t">
            <li class="left">
              <img src="http://gfs6.gomein.net.cn/wireless/T18NA5BjVv1RCvBVdK_425_568.png" alt="">
            </li>
            <li class="right">
              <header><img src="http://gfs8.gomein.net.cn/wireless/T1E0V5BsAT1RCvBVdK_640_284.png" alt=""></header>
              <ul class="right-r">
                <li><img src="http://gfs8.gomein.net.cn/wireless/T1nwJ5BTbT1RCvBVdK_320_284.png" alt=""></li>
                <li><img src="http://gfs5.gomein.net.cn/wireless/T14P_5B7Jv1RCvBVdK_320_284.png" alt=""></li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <!--换新推荐  -->
      <div class="renew">
          <header>
            <router-link :to="{name:'food'}">
              <h5>换新推荐</h5>
            </router-link>
            <p>查看更多<span>></span></p>
        </header>
          <div class="scroll">
              <MytoTabs :url="mores"></MytoTabs>
          </div>
      </div>
      <!-- 二次广告 -->
          <div class="brand">
          <header>
            <h5>国美好店</h5>
        </header>
        <section>
          <ul class="left-t">
            <li class="left">
              <img src="http://gfs6.gomein.net.cn/wireless/T18NA5BjVv1RCvBVdK_425_568.png" alt="">
            </li>
            <li class="right">
              <header><img src="http://gfs8.gomein.net.cn/wireless/T1E0V5BsAT1RCvBVdK_640_284.png" alt=""></header>
              <ul class="right-r">
                <li><img src="http://gfs7.gomein.net.cn/wireless/T1XTE5BvdT1RCvBVdK_532_362.png" alt=""></li>
                <li><img src="http://gfs9.gomein.net.cn/wireless/T1eOV5BsJT1RCvBVdK_533_362.png" alt=""></li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
      <!-- 滚动标签 -->
      <div class="brand selling">
            <header>
            <h5>热卖榜单</h5>
          </header>
        <div class="wrapper">
            <van-tabs>
            <van-tab>
                <template #title>
                    <li>电脑办公</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
              <van-tab>
                <template #title>
                    <li>智能数码</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
              <van-tab>
                <template #title>
                    <li>销售榜</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
              <van-tab>
                <template #title>
                    <li>收藏榜</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
              <van-tab>
                <template #title>
                    <li>好评榜</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
              <van-tab>
                <template #title>
                    <li>手机通讯</li>
                  </template>
                  <div class="scroll">
                  <MytoTabs MytoTabs :url="mores"></MytoTabs>
                </div>
            </van-tab>
          </van-tabs>

        <div class="more-w">
          <span>查看完整榜单</span>
        </div>
        </div>
      </div>

    </div>

    <div class="allBuy">
      <header>
        <img src="http://gfs6.gomein.net.cn/wireless/T1UF_4B7WT1RCvBVdK_1125_150.png" alt="">
      </header>
      <CartList :items="newlist"></CartList>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Grid, GridItem,SwipeCell, Tab, Tabs  } from "vant";
import MyTabs from "@/Home/PhoneShop/common/tabs";
import MytoTabs from "@/Home/PhoneShop/common/brand";
import axios from 'axios'
import waterfall from 'vue-waterfall2'
import CartList from "@/Home/PhoneShop/common/cartlist";
Vue.use(waterfall)
Vue.use(SwipeCell);   
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Tab);
Vue.use(Tabs);

export default {
  data() {
    return {
      coming:[],
      mores:[],
      newlist:[],
      activeName: 'a',
      images: [
        "http://gfs7.gomein.net.cn/wireless/T1w7D5Bvxv1RCvBVdK_1069_390.png",
        "http://gfs8.gomein.net.cn/wireless/T1A0V5BmxT1RCvBVdK_1063_390.jpg",
        "http://gfs8.gomein.net.cn/wireless/T1WOC5BKJv1RCvBVdK_1065_390.jpg",
        "http://gfs5.gomein.net.cn/wireless/T1QmA5BvZT1RCvBVdK_1065_390.png"
      ],
      icons: [
        {
          id: 1,
          text: "手机",
          iconimgs:
            "http://gfs8.gomein.net.cn/wireless/T1nxxmBjCT1RCvBVdK_215_150.png"
        },
        {
          id: 2,
          text: "平板电脑",
          iconimgs:
            "http://gfs5.gomein.net.cn/wireless/T1QXx4BvKT1RCvBVdK_215_150.png"
        },
        {
          id: 3,
          text: "单反相机",
          iconimgs:
            "http://gfs6.gomein.net.cn/wireless/T19aW4BCE_1RCvBVdK_215_150.png"
        },
        {
          id: 4,
          text: "耳机耳麦",
          iconimgs:
            "http://gfs8.gomein.net.cn/wireless/T1rrZmBmbv1RCvBVdK_215_150.png"
        },
        {
          id: 5,
          text: "笔记本",
          iconimgs:
            "http://gfs9.gomein.net.cn/wireless/T16xhmBC_T1RCvBVdK_215_150.png"
        },
        {
          id: 6,
          text: "台式机",
          iconimgs:
            "http://gfs7.gomein.net.cn/wireless/T1XpL5BTJv1RCvBVdK_215_150.png"
        },
        {
          id: 7,
          text: "智能家居",
          iconimgs:
            "http://gfs9.gomein.net.cn/wireless/T1dtb4B7Kg1RCvBVdK_215_150.png"
        },
        {
          id: 8,
          text: "智能音箱",
          iconimgs:
            "http://gfs7.gomein.net.cn/wireless/T1FdhmBbZT1RCvBVdK_215_150.png"
        }
      ]
    };
  },
  components: {
    MyTabs,
    MytoTabs,
    CartList
  },
  created (){
      axios({
            url:'http://localhost:9000/telephone'
        })
        .then((data)=>{
            this.newlist=data.data.goodsList
            console.log(this.newlist )
        })
  },
};
</script> 


<style lang="stylus" scoped>
.part 
  margin: 0 10px;
.focusPhoto 
  width: 100%;
  height: 142px;
  box-sizing: border-box;
  padding: 6px 0;

  .template 
    overflow: hidden;
    height: 130px;
    width: 355px;
    box-sizing: border-box;
    border-radius: 10px;

    img 
      width: 355px;
      height: 130px;

.Gongge 
  padding: 6px 0px;

  .van-grid 
    box-sizing border-box
    overflow: hidden;
    border-radius: 10px;
   /deep/.van-grid-item__content
      padding 10px 0 0 0
   /deep/.van-icon__image
      width 67px
      height 47px
.advertisement 
  height: 95px;
  img 
    width: 100%;
    height: 100%;
.Spike 
  height: 300px;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color white 
  header 
    img 
      width: 100%;
      height: 100%;
  
  .mytabs
    line-height 1.6
    height 51px
    display flex
    li
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-items center
      p
        text-align center
        font-size 17px 
        color black
      span 
        font-size 11px
        color #262c32
        text-align center
    .goods-multiple-wrapper
      height 200px
      margin 5px 0px 8px

.brand
  height 240px
  background-color white
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  header 
   height 50px
   padding 0 10.5px
   h5
    height 50px
    line-height 50px
    font-size 18px
  section
    height 190px
    .left-t
      display flex
      .left
        width 142px
        height 190px
        img 
          width 100%
          height 100%
      .right
        width 213px
        height 190px
      header
        width 213px
        height 94.5px
        padding 0
        img 
          width 100%
          height 100%  
      .right-r
        display flex
        li
          flex 1
          height 95.45px
          img 
            width 100%
            height 100%
.renew
  height 238px
  background-color white
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 10px;
  header
    display flex
    justify-content space-between
    height 50px
    padding 0 10.5px
    p
      height 47px
      font-size 14px
      color #919599
      span 
        display inline-block
        font-weight 600
  h5
    height 50px
    line-height 50px
    font-size 18px
  .teng
    overflow-x: scroll;
.selling
  height 328px
  .wrapper
    height 192px
    box-sizing border-box
    padding 5px 0 0
  .more-w
    height 46px
    display flex
    justify-content center
    align-items center
    span  
      display inline-block
      font-size 14px
      color #5a6066
.allBuy
  overflow scroll
  margin-top 10px 
  header
    height 50px
    img 
      width 100%
      height 100%
</style>
