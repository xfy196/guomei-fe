<template>
  <div>
    <!-- 头部导航栏 -->
    <TopBar></TopBar>
    <!-- 购物车数据 -->
    <CartList></CartList>
    <!-- 推荐商品 -->
    <!-- <RecommendGoods></RecommendGoods> -->
  </div>
</template>

<script>
import TopBar from '@/Cart/TopBar'
import CartList from '@/Cart/CartList'
import RecommendGoods from '@/Cart/RecommendGoods'
export default {
  components: {
    TopBar,
    CartList,
    RecommendGoods
  }
}
</script>

<style lang="stylus" scoped>

</style>