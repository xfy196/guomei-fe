<template>
  <div class="recommend-goods">
      <van-divider
        :style="{ color: '#f20c59', borderColor: '#f20c59', padding: '0 16px' }"
      >
        <div class="recommend-title">
          <van-icon name="thumb-circle" size="0.6rem"/>
          <p>为您推荐</p>
        </div>
      </van-divider>
      <div class="good-list">
        <shopItemCart v-for="item in recommendData" :key="item.productId + Math.random()" :item="item"></shopItemCart>
      </div>
    </div>
</template>

<script>
import shopItemCart from '@/common/shop-item-cart'

import axios from 'axios';

export default {
  data() {
    return {
      recommendData: []
    }
  },
  components: {
    shopItemCart
  },
  mounted() {
    axios({
      url: '/api/recommend'
    })
    .then((res) => {
      this.recommendData = res.data.goodsList;
      console.log(this.recommendData)
    })
  },
}
</script>

<style lang="stylus" scoped>
.recommend-goods
  padding 0 10px
  .recommend-title
    display flex
    align-items center
    p   
      font-size 18px
      margin-left 6px
  .good-list
    display flex
    flex-wrap wrap
    .gui-waterfall-double-goods-item
      background-color #fff
      margin-bottom 5px
      border-radius 10px
      width 175px
      &:nth-of-type(odd)
        margin-right 5px
</style>