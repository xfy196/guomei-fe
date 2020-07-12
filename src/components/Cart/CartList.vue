<template>
  <div id="cart-list">
    <div class="shop-info">
      <van-checkbox v-model="allChecked" checked-color="#DE345C" icon-size="18">
        <div class="shop-name">
          <img src="http://gfs13.gomein.net.cn/T1aIETByh_1RCvBVdK.png" alt="">
          <p>北京大中小营店</p>
        </div>
      </van-checkbox>
    </div>
    <div class="goods-list">
      <div class="goods-item" v-for="goods in cartData" :key="goods.name">
        <div class="box"><van-checkbox v-model="checked" checked-color="#DE345C" icon-size="15"></van-checkbox></div>
        <div class="goods-info">
          <p class="photo">
            <img :src="goods.imgUrl" alt="">
          </p>
          <div class="goods-detail">
            <div class="title"><span>国美超市</span>{{ goods.name }}</div>
            <div class="price-calculate">
              <div class="price">￥<span>{{ goods.price }}</span></div>
              <van-stepper v-model="count" integer button-size="0.5rem"/>
            </div>
            <div class="operate">
              <ul>
                <li>移入收藏</li>
                <li>删除</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup, Stepper, Divider } from 'vant';
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Divider);



export default {
  data() {
    return {
      count: 1,
      allChecked: true,
      checked: true,
      cartData: [
        {
          name: '丹麦蓝罐曲奇饼干908g 国美超市甄选',
          imgUrl: 'http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_250.jpg?v=2',
          price: 109.90,
          count: 1,
          shopName: '北京大中小营店',
        },
        {
          name: '希诺大功率电子驱鼠器802 国美超市甄选',
          imgUrl: 'http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2',
          price: 451.90,
          count: 1,
          shopName: '北京大中小营店',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
#cart-list
  padding 10px
  .shop-info
    padding-left 10px
    .shop-name
      display flex
      align-items center
      img 
        height 17px
      p 
        font-size 14px
        color #333333
        font-weight 600
  .goods-list
    margin-top 5px
    .goods-item
      display flex
      align-items center
      margin-bottom 3px
      background-color #fff
      border-radius 15px
      .box
        width 30px
        padding-left 10px
      .goods-info
        padding 10px 10px 0
        display flex
        .photo
          margin-right 10px
          width 90px
          height 90px
          img 
            width 100%
        .goods-detail
          .title
            font-size 13px
            color #333333
            span 
              color #ffffff
              font-size 12px
              transform scale(0.8)
              background-color #f20c59
              padding 0px 4px
              border-radius 4px
              margin-right 4px
          .price-calculate
            display flex
            justify-content space-between
            padding-right 10px
            margin 20px 0
            .price
              font-size 12px
              color #f20c59
              span 
                font-size 16px
          .operate
            display flex
            justify-content flex-end
            ul
              display flex
              margin-bottom 15px
              li
                line-height 1
                font-size 12px
                color #919599
                padding 0 15px
                &:first-of-type{
                  border-right 0.5px solid #919599
                }


</style>