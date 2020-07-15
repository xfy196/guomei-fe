<template>
  <div class="shop-status">
      <van-grid :border="false">
        <van-grid-item 
          v-for="item in gridData.shopDatas"
          :key="item.icon"
          :icon="item.icon" 
          :text="item.text" />
      </van-grid>
      <div class="all-order">
        <b></b>
        <img class="order-img" :src="gridData.shopOrder.img">
        <span>{{gridData.shopOrder.span}}</span>
        <i>{{gridData.shopOrder.i}}</i>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
Vue.use(GridItem);

export default {
  props : ['shop'],
  data() {
    return {
      gridData : [],
    }
  },
  created(){
    this.gridData = this.shop
    console.log(this.shop)
  }
}
</script>

<style lang="stylus" scoped>
.shop-status
    display flex
    margin-bottom 11.5px
    position relative
    .van-grid
      height 96px
      .van-grid-item
        width 75px
        color #666
    .all-order
      box-sizing border-box
      width 75px
      height 96px  
      display flex
      flex-direction column
      align-items center
      padding 17.5px 0
      background #fcfcfc
      b
        background url(http://app.gomein.net.cn/plus/images/ucenter/jiantou.png?v=2017092001) no-repeat
        width 9px
        height 9px
        display inline-block
        position absolute
        z-index 888
        width: 40px;
        height: 40px;
        top: 30px;
        left: 293px;
      .order-img 
        width 24.5px
        height 24.5px
      span 
        font-size 13px
        color #666
        margin-top 5px
      i 
        font-size 10px
        color #999
        margin-top -2px
</style>