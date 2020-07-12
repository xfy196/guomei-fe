<template>
  <div id="address-list">
    <div class="no-address">
      <h1>我的收货地址</h1>
      <div class="tips">
        <span>您还没有收货地址</span>
        <p @click="goAddress">新建地址</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goAddress(){
      this.$router.push('/address')
    }
  },
}
</script>

<style lang="stylus" scoped>
  #address-list
    margin-top 10px
    background-color #ffffff
    padding 0 15px
    .no-address
      h1
        font-weight 400
        line-height 1
        font-size 13px
        color #919599
        padding-top 18px
      .tips
        display flex
        justify-content space-between
        align-items center
        span 
          font-size 14px
          font-weight 400
          color #262c32
        p  
          margin 8px 0
          font-size 14px
          font-weight 400
          color #ffffff
          width 90px
          height 30px
          text-align center
          line-height 30px
          border-radius 30px
          background-image linear-gradient(90deg,#fa1e8c,#f20c59 86%)
</style>