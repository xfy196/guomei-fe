<template>
    <div>
        <!-- <div class="comfortable-goods" v-for="items in goodsList" :key="items.shopId" >
            <img class="goods-img" :src="items.productImgURL">
            <h3 class="shops-title">{{items.shopName}}</h3>
            <div class="goods-title">{{items.goodsName}}</div>
            <p class="goods-price">￥{{items.price}}</p>
        </div> -->
        <div class="comfortable-goods">
            <img class="goods-img" src="https://gfs17.gomein.net.cn/T1phKgBvx_1RCvBVdK_260.jpg">
            <h3 class="shops-title">海一海尔专卖店</h3>
            <div class="goods-title">海尔（Haier）壁挂炉家用燃气地暖锅炉采暖两用天然气热水器 采暖洗浴两用(20KW（50-120平）)</div>
            <p class="goods-price">￥4199.00</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.comfortable-goods
  width 175px
  height 314px
  font-size 13px
  margin 5px 10px 10px
  background #fff
  .goods-img
    width 175px
    height 175px
  .shops-title
    color #7a7f85
    margin 0 0 0 10px
    padding-bottom 5px
  .goods-title
    -webkit-line-clamp 2
    text-overflow ellipsis
    display -webkit-box
    -webkit-box-orient vertical
    overflow hidden
    margin 0 0 0 10px
  .goods-price
    font-size 16px
    color #f20c59
    font-weight 700
    margin 9px 0 0 10px
</style>