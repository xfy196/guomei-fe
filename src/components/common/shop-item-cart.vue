<!-- 
 * @description: 单个商品带有购物车按钮的组件 
 * @fileName: shop-item-cart.vue 
 * @author: 小小荧 
 * @date: 2020-07-11 10:28:53
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <!---->
  <section class="gui-waterfall-double-goods-item gui-waterfall-double-item">
    <router-link :to="{path: '/detail', query: {id : item.productId, shopId: item.shopId}}" tag="a" class="item-link"
      ><div class="gome-bg goods-img">
        <img v-lazy="item.productImgURL" />
      </div>
      <div class="store-info">
        <img v-lazy="item.shopLogoUrl" />
        <span class="name">{{ item.shopName }}</span>
      </div>
      <div class="goods-info">
        <p class="desc">
          <span class="goods-tag-bg"
            ><span>{{ item.type === "1" ? "自营" : "私营" }}</span></span
          >
          <span class="text">{{ item.goodsName }}</span>
        </p>
      </div></router-link
    >
    <div class="goods-other">
      <div class="goods-tag-list">
        <span
          v-if="item.scheme_type_id === '1'"
          style="color: rgb(242, 12, 86); border-color: rgb(242, 12, 86);"
          >秒杀</span
        >
      </div>
      <p class="price-cart">
        <span class="price" v-if="item.price"><small>¥</small> <big>{{item.price}}</big> <span></span></span>
        <span class="price" v-else><span>暂无价格</span></span>
        <AddCartBtn :item="item"></AddCartBtn>
      </p>
      <p v-if="item.markingPrice" class="price-original">{{item.markingPriceDesc}}</p>
      <!---->
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import AddCartBtn from "@/common/addCartBtn"
Vue.use(Lazyload, {
  lazyComponent: true,
});
export default {
  props: ["item"],
  components: {
    AddCartBtn
  }
};
</script>
<style lang="stylus">

.item-link
  width: inherit;
  display: block;
  border-radius: .21333rem .21333rem 0 0;
  overflow: hidden;
.goods-img
  width: 100%;
  height: 4.66667rem;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color #ffffff
  img
    width 100%
    height auto
.store-info
  margin: 0 .26667rem;
  padding: .26667rem 0;
  display: flex;
  align-items: center;
  border-bottom: .02667rem dashed #dcddde
  img
    width: .42667rem;
    height: .42667rem;
    border-radius: 50%;
  .name
    display: inline-block;
    font-size: .34667rem;
    color: #7a7f85;
    margin-left: .10667rem;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
.goods-info
  margin: .21333rem .26667rem 0;
  min-height: .90667rem;
  overflow: hidden;
  .desc
    font-size: .34667rem;
    color: #262c32;
    line-height: .45333rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp: 2;
    word-break: break-all;
    word-wrap: break-word;
    .goods-tag-bg
      display: inline-block;
      line-height: .32rem;
      color: #fff;
      padding: .02667rem;
      margin-right 4px
      background: -webkit-gradient(linear,left top,right top,from(#fa1e8c),to(#f20c59));
      background: linear-gradient(90deg,#fa1e8c,#f20c59);
      border-radius: .05333rem;
      span
        display: inline-block;
        font-size: .26667rem;
        line-height: .26667rem;
.goods-other
  margin: 0 .26667rem .32rem;
  .goods-tag-list
    margin: .10667rem 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    height: .4rem;
    span
      display: inline-block;
      border-width: .5px;
      border-style: solid;
      padding: 0 .05333rem;
      margin-right: .08rem;
      font-size: .26667rem;
      border-radius: .05333rem;
      white-space: nowrap;
      line-height: .4rem;
  .price-cart
    color: #f20c59;
    font-weight: 700;
    margin: .24rem 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .price
      display: inline-table;
      samll
        font-size: .32rem;
      big
        font-size: .45333rem;
  .price-original
    font-size: .32rem;
    color: #b3b8bd;
    text-decoration: line-through;
    height: .32rem;
    line-height: .32rem;
</style>
