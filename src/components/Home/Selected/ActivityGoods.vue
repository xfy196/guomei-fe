<template>
  <div>
    <div id="activity">
      <van-grid :column-num="2" class="activity-products">
        <van-grid-item class="activity-item" v-for="item in goodsList" :key="item.title">
          <h1>{{ item.title }}<span>{{ item.slogan }}</span></h1>
            <ul>
              <li v-for="good in item.goods" :key="good.img">
                <img :src="good.img" alt="">
                <p>￥{{ good.price }}</p>
              </li>
            </ul>
        </van-grid-item>
      </van-grid>
      <div class="broadcast">
        <h1><img src="https://js.gomein.net.cn/ssr/statics/images/toutiao.f5eb335.png" alt=""></h1>
        <p><span>10亿焕新计划</span>挂机最高补贴400元</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      goodsList: [
        {
          title: '国美秒杀',
          slogan: '疯抢倒计时',
          goods: [
            {
              img: 'http://gfs17.gomein.net.cn/T1pNbgByYv1RCvBVdK_400.jpg',
              price: '799'
            },
            {
              img: 'http://gfs17.gomein.net.cn/T1jCY4BKV_1RCvBVdK_400.jpg',
              price: '899'
            },
          ]
        },
        {
          title: '国美超市',
          slogan: '好物甄选',
          goods: [
            {
              img: 'http://gfs17.gomein.net.cn/T1EUJ5BKbv1RCvBVdK_260.jpg',
              price: '129.9'
            },
            {
              img: 'http://gfs17.gomein.net.cn/T1sk_5BvET1RCvBVdK_260.jpg',
              price: '100'
            },
          ]
        },
        {
          title: '拼购',
          slogan: '好物精选',
          goods: [
            {
              img: 'http://gfs17.gomein.net.cn/T1L2_mBbWT1RCvBVdK_360.jpg',
              price: '24.9'
            },
            {
              img: 'http://gfs17.gomein.net.cn/T1vcJ_BTL_1RCvBVdK_360.jpg',
              price: '18.9'
            },
          ]
        },
        {
          title: '品牌特卖',
          slogan: '享大牌优惠',
          goods: [
            {
              img: 'http://gfs17.gomein.net.cn/T1qsdmB4CT1RCvBVdK_260.jpg',
              price: '169'
            },
            {
              img: 'http://gfs17.gomein.net.cn/T1ueC4BCJ_1RCvBVdK_260.jpg',
              price: '5499'
            },
          ]
        },
      ]
    }
  },
}
</script>

<style lang="stylus" scoped>
#activity
  margin 10px 10px 
  background-color #fff
  border-radius 15px
  .activity-products
    border-radius 15px
    display flex
    flex-wrap wrap
    /deep/.activity-item .van-grid-item__content
      border-radius 15px
      padding 15px 10px 0
      display flex
      flex-direction column
      align-items flex-start
      h1
        line-height 1
        font-size 16px
        font-weight 700
        margin-bottom 10px
        span
          font-size 12px
          font-weight 400
          margin-left 6px
          color #21daa5
      ul
        display flex
        justify-content space-around
        li
          &:first-of-type
            margin-right 10px
          img 
            width 67px
            height 67px
          p 
            line-height 1
            color #f20c59
            font-size 12px
            font-weight 700
            text-align center
            margin-top 3px
            margin-bottom 10px
  .broadcast
    display flex
    padding 0 10px
    height 43px
    align-items center
    h1 
      padding-right 5px  
      border-right 0.5px solid #dddddd
      img  
        display block
        height 14px
    p 
      padding-left 5px
      font-size 12px
      span
        padding 0 2px
        font-size 12px
        color #f20c56
        background-color #ffdce7
        margin-right 2px

    

</style>