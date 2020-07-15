<template>
  <div class="vip-center">
      <van-grid :border="true" :column-num="4">
        <van-grid-item
          v-for="item in vipData"
          :key="item.img"
        >
          <van-image :src="item.img" />
          <span>{{item.span}}</span>
        </van-grid-item>
      </van-grid>
    </div>
</template>

<script>
export default {
  data() {
    return {
      vipData : [
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/huiyuanbu.png?v=2017092001',
          span : '会员俱乐部'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/openMembershipCard/viphuiyuanka.png?v=2017092000',
          span : '我的会员卡'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/shoucang.png?v=2017092001',
          span : '我的收藏'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/fapiaozhushou.png',
          span : '发票助手'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/yijian.png?v=2017092001',
          span : '服务规则'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/shouhuo.png?v=2017092001',
          span : '收货地址'
        },
        {
          img : 'http://app.gomein.net.cn/plus/images/ucenter/service_gift_pkg.png',
          span : '服务礼包'
        },

      ]
         
      
    }
  },
}
</script>

<style lang="stylus" scoped>
.vip-center
  background #fff
  margin-bottom 11.5px
  .van-grid
    .van-grid-item  
      height 82.5px
      .van-image 
        width 24.5px
        height 24.5px  
      span 
        font-size 13px  
        color #666
        margin-top 5px

</style>