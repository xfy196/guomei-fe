<template>
    <div class="goods-wrapper">
        <div class="comfortable-goods" v-for="item in goodsList" :key="item.shopId + Math.random()" >
            <img class="goods-img" :src="item.productImgURL">
            <h3 class="shops-title">{{item.shopName}}</h3>
            <div class="goods-title">{{item.goodsName}}</div>
            <p class="goods-price">￥{{item.price}}</p>
        </div>
        <!-- <div class="comfortable-goods">
            <img class="goods-img" src="https://gfs17.gomein.net.cn/T1phKgBvx_1RCvBVdK_260.jpg">
            <h3 class="shops-title">海一海尔专卖店</h3>
            <div class="goods-title">海尔（Haier）壁挂炉家用燃气地暖锅炉采暖两用天然气热水器 采暖洗浴两用(20KW（50-120平）)</div>
            <p class="goods-price">￥4199.00</p>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      goodsList:[]
    }
  },
  mounted(){
    axios({
      url:'http://localhost:9000/comfortable'
    })
    .then((data)=>{
      this.goodsList=data.data.goodsList.splice(0,20)
    })
  }
}
</script>

<style lang="stylus" scoped>
.goods-wrapper
  display flex
  flex-wrap wrap
  justify-content space-around
  margin 5px 10px 0 10px
  .comfortable-goods
    padding 8px
    width 49%
    height 300px
    font-size 13px
    background #fff
    border-radius 10px
    margin-bottom 5px
    .goods-img
      width 100%
      height 175px
    .shops-title
      color #7a7f85
      margin 0 0 0 10px
      padding-bottom 5px
    /deep/.goods-title
      -webkit-line-clamp 2
      text-overflow ellipsis
      display -webkit-box
      -webkit-box-orient vertical
      overflow hidden
      margin 0 0 0 10px
      line-height 1
    .goods-price
      font-size 16px
      color #f20c59
      font-weight 700
      margin 9px 0 0 10px
</style>