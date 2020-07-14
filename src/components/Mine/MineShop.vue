<template>
  <div class="shop-status">
      <van-grid 
        :border="false"
        
      >
        <van-grid-item icon="balance-pay" text="待付款" />
        <van-grid-item icon="logistics" text="待收货" />
        <van-grid-item icon="flower-o" text="待评价" />
        <van-grid-item icon="refund-o" text="退款/售后" />
      </van-grid>
      <div class="all-order">
        <b></b>
        <img class="order-img" src="//app.gomein.net.cn/plus/images/ucenter/dingdan.png?v=2017092001">
        <span>全部订单</span>
        <i>查看电子发票</i>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style>

</style>