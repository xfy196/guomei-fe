<template>
  <div class="multiple-goods-wrapper">
      <header class="template-header" style='background: url("http://gfs9.gomein.net.cn/wireless/T13gK4B5KT1RCvBVdK_1065_150.jpg") left center / auto 100% no-repeat;'>
      </header>
      <section class="goods-container">
          <div class="goods-multiple-wrapper no-scrollbar">
              <div class="goods-item">
                  <router-link tag="li" to="#">
                      <img src="https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg" alt="">
                  </router-link>
                  <div class="desc-prices">
                      
                  </div>
              </div>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.multiple-goods-wrapper
    border-radius .32rem .32rem 0 0
    margin-left .26667rem
    margin-right .26667rem
    overflow hidden
    margin-top .26667rem
    .template-header
        font-size .48rem
        color #262c32
        height 1.33333rem
        line-height 1.33333rem
    .goods-container
        padding 0 0 .21333rem;
</style>