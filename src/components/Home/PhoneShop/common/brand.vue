<template>
  <div class="teng">
          <div class="goods-item" v-for="item in url" :key="item.skuId">
             <div class="wrap"><img :src=item.productImgURL alt=""></div>
            <div class="desc-prices">
                  <p class="desc">{{item.goodsName}}</p>
                  <p class="price-original">
                      <b>{{item.markingPriceDesc}}</b>
                  </p>
                  <p class="price-cart">
                      <span>
                          {{item.priceDesc}}
                      </span>
                      <a href=""></a>
                  </p>
             </div>
          </div>
  </div>
  
  
</template>

<script>
import Vue from 'vue'
export default {
    props:["url"],
    data () {
        return {
        }
    },
}
</script>

<style lang="stylus" scoped>
.teng
 display flex
 .goods-item
  width 106px
  height 187px
  box-sizing border-box
  margin 0px 4px 0px 10px
  padding 4px 4px 5.5px
  .wrap
   width 98px
   height 98px
   img
    width 98px
    height 98px
  .desc-prices
   line-height 1.5
   margin-top 8px 
   width 98px
   height 72px
   .desc
    width 98px
    height 30px
    font-size 11px
    display: -webkit-box;
    box-sizing border-box
    padding 0 4px
    overflow hidden
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    text-overflow ellipsis
   .price-original
    height 17.5px
    b
     display flex
     text-decoration line-through
     font-weight normal
     font-size 12px
     color #b3b8bd
     box-sizing border-box
     margin 3px 0 0
     padding 0 4px
     
   .price-cart
    display flex
    justify-content space-between
    height 20.8px
    span
     font-weight 600
     color #f20c59
     font-size 14px
    a
     display inline-block
     background-image url("../../../../assets/cart.png")
     background-size cover
     width 20px
     height 20px

     
</style>