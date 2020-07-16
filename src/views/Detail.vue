<template>
<div class="foodlist">
  <!-- 头部未完成 -->
  <nav>
    <div class="toolbar">
      <span class="moer_left"><van-icon name="arrow-left" /></span>
      <ul>
        <li v-for="(item,index) in list" 
            :key="item.id" 
            :class="{active:selectIndex === index}" 
            @click="handClick(index)">{{item.shor}}</li>
      </ul>
      <span class="more_right"><van-icon name="ellipsis" /></span>
    </div>
  </nav>
  <!-- 图片轮播 -->
  <div class="swiper-container">
    <swiper class="swiper-wrapper" ref="mySwiper">
      <swiper class="swiper-slide">
        <div class="warrp">
          <div class="mycontent">
              <van-swipe @change="onChange">
                  <van-swipe-item><img src="http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_400.jpg?v=20170727" alt="">
                  </van-swipe-item>
                  <van-swipe-item><img src="http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_400.jpg?v=20170727" alt="">
                  </van-swipe-item>
                  <van-swipe-item><img src="http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_400.jpg?v=20170727" alt="">
                  </van-swipe-item>
                  <van-swipe-item><img src="http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_400.jpg?v=20170727" alt="">
                  </van-swipe-item>
                  <template #indicator>
                      <div class="custom-indicator">
                          {{ current + 1 }}/4
                      </div>
                  </template>
              </van-swipe>
          </div>
          <!-- 文字 -->
          <div class="content">
              <div class="title">
                  <div class="lingshi">
                      <p>
                          杉城零食大礼包2000g 友女生儿童礼盒美食品超市好吃的2000g
                      </p>
                  </div>
                  <div class="share-profit">
                      <van-icon name="replay" color="#e2e2e2" />
                      <span>分享</span>
                  </div>
              </div>
              <div class="price_box">
                  <p class="price">
                      <span>￥</span>
                      <em>185</em>
                  </p>
              </div>
          </div>
          <!-- 数量 -->
          <div class="moudle">
              <div class="number">
                  <label for="">数量</label>
                  <div class="coutent_box">
                      <van-stepper v-model="number" theme="round" button-size="22" disable-input max="10"/>
                  </div>
              </div>
          </div>

          <!-- 地址 -->
          <div class="adress">
              <van-cell class="send" is-link @click="showPopup" close-on-popstate >
                  <label for="">送至</label>
                  <div class="jiedao">
                      <van-icon name="location-o" />
                      <p>朝阳街道<span>,免运费</span></p>
                  </div>
                  <van-icon name="arrow" class="right" />
                  <van-popup v-model="show" position="right" :style="{ height: '100%',width:'50%'}" />
              </van-cell>
              <div class="service">
                  <ul>
                      <li>
                          <van-icon name="passed" color="#F45F91" />
                          正品保证
                      </li>
                      <li>
                          <van-icon name="passed" color="#F45F91" />
                          包邮
                      </li>
                      <li>
                          <van-icon name="warning-o" color="#a2a4a6" />
                          不支持7天无理由退货
                      </li>
                  </ul>
              </div>
          </div>
          <!-- 评价 -->
          <div class="eva">
              <div class="val">
                  <p>评价(0)</p>
                  <h6>好评度: <span>100%</span>
                      <van-icon name="arrow" />
                  </h6>
              </div>
              <div class="classb">
                  <p>还没有人评价过此商品哦~</p>
              </div>
              <div class="evaluate_nav">
                  <ul>
                      <li>
                          <van-icon name="more-o" />全部评价(0)</li>
                      <li>
                          <van-icon name="chat-o" />购买咨询(0)</li>
                  </ul>
              </div>
          </div>
          <!-- 商标 -->
          <div class="clearfix">
              <div class="cimg">
                  <img src="http://gfs10.gomein.net.cn/T124E4BTCv1RCvBVdK.png" alt="">
              </div>
              <div class="content">
                  <div>北京大中洋桥店</div>
                  <p>
                      <van-icon name="location-o" />丰台区 </p>
              </div>
              <div class="guang">
                  <p>进店逛逛
                      <van-icon name="arrow" />
                  </p>
              </div>
          </div>
          <!-- 喜欢 -->
          <div class="guess_like">
            <Lillter></Lillter>
          </div>
            <Introduce></Introduce>
        </div>
      </swiper>
      <swiper class="swiper-slide">slider2</swiper>
      <swiper class="swiper-slide">slider3</swiper>
    </swiper>

</div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" dot />
            <van-goods-action-icon icon="cart-o" text="购物车" :badge="number" />
            <van-goods-action-icon icon="shop-o" text="店铺" dot />
            <van-goods-action-button type="warning" text="加入购物车" />
            <van-goods-action-button type="danger" text="立即购买" />
        </van-goods-action>
</div>
</template>

<script>
import Vue from 'vue';
import {Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import { NavBar,Icon,Tab,Tabs,Sticky, GoodsAction, GoodsActionIcon, GoodsActionButton,Stepper,Popup  } from 'vant';
import "swiper/swiper-bundle.css"
import Lillter from "@/Home/PhoneShop/common/litterlist"
import Introduce from "@/Home/PhoneShop/common/introduce"
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Sticky);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  directives: {
    swiper: directive
  },
  components: {
    Swiper,
    SwiperSlide,
    Lillter,
    Introduce
  },
  data () {
    return {
      newlist:[],
      show: false,
      number:1,
      selectIndex:0,
      current: 0,
      id:this.$route.query,
      list:[
        {
        shor:"商品",show:true,id:'1'
      },
      {
        shor:"详情",show:false,id:'2'
      },
      {
        shor:"评价",show:false,id:'3'
      },
      
      ],
    }
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
  async  mounted(){
      this.swiper.slideTo(0, 1000, false)
       await axios({
            url:'http://localhost:9000/kitchen'
        })
         .then((data)=>{
            let datas = data.data.goodsList
            this.newlist = datas.find(datas=>{
              return datas.productId === this.id
            })
         })
  },
  methods:{
      showPop(){
           this.show=false;
      },
     showPopup() {
      this.show = true;
    },
    onChange(index) {
      this.current = index;
    },
    handClick(index){
      this.selectIndex = index;
      this.swiper.slideTo(index);
    }
  },
  
}
</script>

<style lang="stylus" scoped>
.active
  font-size: 1.7rem;
  color: #F20C59;
  box-sizing: border-box;
  border-bottom: 4px solid #F20C59;

.foodlist
  display flex
  height 100%
  flex-direction:column
nav 
  width 100%
  border-bottom  1px solid #e6e6e6;
  z-index 5
  background-color white
  .toolbar
    overflow hidden
    display flex
    height 45px
    justify-content space-between
    .moer_left

      width 35px
      height 46px
      line-height 46px
      margin-left  10px
      font-size 17px
      margin-top 4px
    ul
      overflow hidden
      display flex
      li
        width 57.5px
        height 46.5px
        font-size 17px
        line-height 46.5px
        text-align center
    .more_right
      width 22px
      height 44px
      line-height 44px
      margin-top 5px 
      margin-right 30px
      font-size 30px
.swiper-container
  width 100%
  height 100%
  overflow hidden
.warrp            
  flex 1                      
  height 100%
  overflow scroll
  background-color white
  .mycontent
    width 300px
    height 300px
    margin 0 37.5px 
    .van-swipe
      height 300px
      img 
        width 100%
        height 100%
    .custom-indicator
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1)
    
  
  
  
  
  
  
  
  
  
  
  .content
    display flex
    flex-direction column
    height 91px
    box-sizing border-box
    padding 10px 8px 12px 10px
    .title
      display flex
      justify-content space-between
      .lingshi
        height 40px
        box-sizing border-box
        padding 0 13px 0 0
        p
          font-size 16px
    .share-profit
      float right 
      display flex
      flex-direction column
      border-left: 1px solid #e6e6e6
      width 48px
      height 39px
      padding 0 0 0 7px
      .van-icon
        text-align center
        font-size 18px
      span 
        width 40px
        height 13px
        margin-top 5px
        text-align center
        font-size 13px
    .price_box
      height 32px
      .price
        height 32px
        color #f20c59
        padding 10px 0 0 0
        font-weight 600
        span 
          font-size 17px
        em
          font-size 24px
          font-weight 600
  .moudle
    border-bottom 10px solid  #F2F2F2 
    border-top 10px solid  #F2F2F2 
    height 65px
    box-sizing  border-box
    padding 0 10px
    display flex
    align-items center
    .number
      display flex
      align-items center
      label
        display inline-block
        width 26px
        height 18px
        font-size 13px
        color  #a2a4a6
      .coutent_box
        margin-left 10px
        i 
          color  #a2a4a6
          display inline-block
          width 26px
          height 26px
          font-size 18px
          text-align center
          border: 1px solid #bebebe;
        input 
          width 50px
          height 26px 
          color  black
          font-size 20px
          font-weight normal
          text-align center
          border none 
          border-top: 1px solid #bebebe;
          border-bottom: 1px solid #bebebe;
  .adress
    height 78px
    padding 12px 0 0
    box-sizing border-box
    .send
      display flex
      height 30px
      padding 0px 10px 10px
      box-sizing border-box
      position relative
      label
        display inline-block
        position absolute
        width 26px
        height 18px
        font-size 13px
        color  #a2a4a6
      .jiedao
        width 309px
        height 20px
        display flex
        margin-left 40px
        i 
          font-size 13px
          line-height 20px
        p 
          font-size 13px
        span 
          color #F20c59
      .right
        margin-left 0px
        font-size 17px
        float  right 
        color #BABCBD
    .service
      height 36px
      background-color #FAFAFA
      ul
        display flex
        box-sizing border-box
        padding 10px
        li
          padding 0 0 0 10px
          font-size 11px   
          color #a2a4a6
  .eva

    height 130px
    border-top 10px solid #F2F2F2;
    .val
      height  46px
      padding 15px 0
      margin  0 12px
      box-sizing border-box
      p
        display inline
        font-size 13px
        height 13px
        float left
      h6
        display inline
        font-size 13px
        font-weight normal
        float right
        color #8A8F94
        span 
          color #F32A6D
    .classb
      display flex
      height 30px
      padding 0px 10px 10px
      box-sizing border-box
      position relative
      font-size 13px
    .evaluate_nav
      border-top 1px solid #e6e6e6;
      height  46px
      padding 9.5px 0
      box-sizing border-box
      ul
        height 26px
        display flex
        li
          width 188px
          border-right  1px solid #e6e6e6;
          height 26px
          font-size 13px
          text-align center
          line-height 26px
  .clearfix
    border-top 10px solid #F2F2F2;
    height 87px
    font-size 14px
    margin 10px 0 0 
    padding 15px 10px 
    display flex
    .cimg
      width 40px
      height 40px
      img 
        width 100%
        height 100%
    .content
      width 240px
      height 47px
      padding 0 0 0 10px
      p
        width  200px
        height 27px
        font-size 12px
        box-sizing border-box
        padding 7px 0 0 12.5px
        color #6E7379
    .guang
      height 14px
      font-size 13px
      color #A8ACAF

.van-goods-action
  z-index 9999
  position static
</style>