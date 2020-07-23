<template>
<div class="headdd">
    <div class="main1">
        <div class="main2">
    <!-- 头部 -->
            <div class="top-search-area">
                <div class="shop-banner-mask">
                    </div>
                <section class="top-search">
                    <a href="">
                        <span><van-icon name="search" /></span>
                        <input type="text" placeholder="搜索商品">
                    </a>
                </section>
            </div>
        <!-- 门店消息 -->
                    <!-- 图片 -->
                <div class="gui-store-recommend">
                <div class="shop-position">
                    <ul>
                        <li class="c1"><van-icon name="location" /></li>
                        <li class="c2">北京大中团结湖店</li>
                        <span><van-icon name="arrow-down" /></span>
                    </ul>
                    <p>门店信息<span><van-icon name="arrow" /></span></p>
                </div>
                    <div class="shopowner-info">
                        <dt>
                        </dt>
                        <dd>
                            <div class="name-flag">
                                <span>李知恩</span>
                                <p></p>
                            </div>
                            <p>精英团队，为您服务</p>
                        </dd>
                    </div>
                    <div class="gome-bg">        
                        <img src="http://gfs10.gomein.net.cn/T1WMxmBX_T1RCvBVdK.png" alt="">
                    </div>
            </div>
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
        <!-- 好店 -->
            <div class="template-margin">
                <div class="head">精选活动</div>
                <div class="gui-image-double-wrapper">
                    <ul>
                        <li><img src="http://gfs9.gomein.net.cn/wireless/T1gnJ5B__T1RCvBVdK_334_198.jpg" alt=""></li>
                        <li><img src="http://gfs6.gomein.net.cn/wireless/T11vA5BQKT1RCvBVdK_334_198.png" alt=""></li>
                    </ul>
                </div>
            </div>
            <!-- 抢购 -->
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
               <!--换新推荐  -->
            <div class="renew">
                <header>
                    <router-link :to="{name:'food'}" tag="a">
                    <h5>换新推荐</h5>
                    </router-link>
                    <p>查看更多<span>></span></p>
                </header>
                <div class="scroll">
                    <MytoTabs :url="mores"></MytoTabs>
                </div>
            </div>

            <div class="template-corner3">
                <header>品牌推荐</header>
                <ul>
                    <li><img src="http://gfs7.gomein.net.cn/wireless/T1GvW4B4Ev1RCvBVdK_345_501.jpg" alt=""></li>
                    <li><img src="http://gfs5.gomein.net.cn/wireless/T1jeh4BmDT1RCvBVdK_345_501.jpg" alt=""></li>
                    <li><img src="http://gfs6.gomein.net.cn/wireless/T1LvY5BK_v1RCvBVdK_345_501.jpg" alt=""></li>
                </ul>


            </div>


            <div>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import MyTabs from "@/Home/PhoneShop/common/tabs";
import { Icon,Swipe, SwipeItem,Tab, Tabs  } from 'vant';
import MytoTabs from "@/Home/PhoneShop/common/brand";
import axios from 'axios'
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
export default {
    data () {
        return {
        coming:[],
        mores:[],
        images: [
            "http://gfs7.gomein.net.cn/wireless/T1w7D5Bvxv1RCvBVdK_1069_390.png",
            "http://gfs8.gomein.net.cn/wireless/T1A0V5BmxT1RCvBVdK_1063_390.jpg",
            "http://gfs8.gomein.net.cn/wireless/T1WOC5BKJv1RCvBVdK_1065_390.jpg",
            "http://gfs5.gomein.net.cn/wireless/T1QmA5BvZT1RCvBVdK_1065_390.png"
        ],
        }
    },
    components:{
        MyTabs,
        MytoTabs
    },
    created (){
      axios({
            url:'http://localhost:9000/telephone'
        })
        .then((data)=>{
            // this.newlist=data.data.goodsList
            this.coming=data.data.goodsList.slice(3,6);
            this.mores=data.data.goodsList.slice(10,20);
            console.log(this.coming)
        })
  },
}
</script>

<style lang="stylus" scoped>
foo =
  width 100%
  height 100%
.headdd
    display flex
    height 100%
    flex-direction column
    .main1
        flex 1
        height 100%
        overflow hidden
        .main2
            height 100%
            overflow scroll
.top-search-area
    position relative
    height 250px
    background-image url("http://gfs15.gomein.net.cn/T1lOV4B_dT1RCvBVdK.jpg") 
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
    background-origin: content-box;
    background-clip: content-box;
    .top-search
        position absolute
        top 0
        z-index 2
        box-sizing border-box
        height 44px
        padding 7px 15px 7px 10px
        left: calc(50% - 165px);
        a   
            text-align center
            width 312px
            display inline-block
            height 30px
            background-color white 
            border-radius 20px
            line-height 22px
            input 
                color  #919599
                width 268px
                height 25px
                padding 2px 4px
                box-sizing border-box
                border none
                line-height 25px
                font-size 14px
                outline: none;
                
            span 
                display inline-block
                height 14px
                line-height 16px
                .van-icon-search
                    color #B9B9B9
                    font-size 14px                                                          
.shop-banner-mask
    background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.55));
    height 250px
    position absolute
    top 0
    width 100%
.gui-store-recommend

    height 186px
    width 355px
    margin -54px 10px 0 10px
    background-color white
    position relative
    z-index 10
    border-radius 10px
    .shop-position
        height 50px
        padding 18px 11px 8px 12px 
        box-sizing border-box
        font-size 24px
        display flex
        justify-content space-between
        ul
            display flex
            .c1
                font-size 24px
                color red
            .c2
                font-size 20px
                font-weight 600
            span 
                font-size 15px
                margin 2px 0 0 5px
        p
            font-size 13px
            color #919599
            span 
                font-size 13px
                margin-left 5px
    .shopowner-info
        height 88px
        box-sizing border-box
        padding 20px 12px 14px
        display flex
        align-items center
        dt
            display inline-block
            width 54px
            height 54px
            border-radius 50%
            background-color red
            background-image url ("")
        dd
            display flex
            flex-direction column
            margin-left 12px
            .name-flag

                width 117px
                height 21px
                display flex
                span
                    width 45px
                    height 20px
                    font-size 15px
                    font-weight 600
                p
                    width 60px
                    height 15px
                    background-image url("https://js.gomein.net.cn/ssr/statics/images/tag_jinpaidianzhang@2x.0bff75c.png")
                    background-size cover
            p
                font-size 12px
                color #999999
    .gome-bg
        height 49px
        img 
            {foo}
.focusPhoto 
  margin 0 auto
  width: 355px;
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
.template-margin
    height 155.26px
    margin 10px 10px 0 10px
    overflow hidden
    border-radius: 10px;
    background-color white
    .head 
        height 50px
        font-weight 600
        font-size 18px
        line-height 50px
        padding 0 10.5px
    .gui-image-double-wrapper
        ul
            display flex
            li
                width 50%
                height 105px
                img 
                    {foo}
.Spike 
  height: 300px;
  box-sizing: border-box;
  margin: 10px 10px 0 10px;
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
.renew
  height 238px
  background-color white
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 10px 0 10px;
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

.template-corner3
    padding 10px 10px 0 10px
    box-sizing border-box
    header
        font-size 20px
        height 50px
        line-height 50px
        font-weight 600
    ul
        display flex
        justify-content space-between
        li
            width 32%
            height 167px
            overflow hidden
            border-radius 10px
            img 
                {foo}
</style>