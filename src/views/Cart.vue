<template>
  <div class="unscroll">
    <!-- 头部导航栏 -->
    <TopBar></TopBar>
    <div class="scroll">
    <!-- 购物车数据 -->
    <CartList></CartList>
    <!-- 推荐商品 -->
    <RecommendGoods></RecommendGoods>
    </div>

    <ParBar></ParBar>
  </div>
</template>

<script>
import TopBar from '@/Cart/TopBar'
import CartList from '@/Cart/CartList'
import RecommendGoods from '@/Cart/RecommendGoods'
import ParBar from '@/Cart/PayBar'
export default {
  components: {
    TopBar,
    CartList,
    RecommendGoods,
    ParBar
  }, 

}
</script>

<style lang="stylus" scoped>
.unscroll
  overflow hidden
  height 100%
  display flex
  flex-direction column
.scroll
  height 100%
  overflow scroll
</style>