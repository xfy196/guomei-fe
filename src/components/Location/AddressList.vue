<template>
  <div id="address-list">
    <h1>我的收货地址</h1>
    <div class="no-address" v-if="!address">
        <span>您还没有收货地址</span>
        <p @click="goAddress">新建地址</p>
    </div>
    <div class="address-list" v-else>
      <div class="address-item">
        <p class="address-detail">{{ address.county }}{{ address.addressDetail }}</p>
        <div class="contact-info">
          <span class="name">{{ address.name }}</span>
          <span class="tel">{{ address.tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') }}</span>
        </div>
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
  computed: {
    address(){
      return JSON.parse(window.localStorage.getItem('address'));
    }
  },
}
</script>

<style lang="stylus" scoped>
  #address-list
    margin-top 10px
    background-color #ffffff
    padding 0 15px 5px
    h1
      font-weight 400
      line-height 1
      font-size 13px
      color #919599
      padding-top 18px
      margin-bottom 10px
    .no-address
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
    .address-list
      .address-item
        padding 5px 0
        .address-detail
          font-size 16px
          font-weight 700
          color #262c32
        .contact-info
          margin-top 5px
          font-size 13px
          color #7a7f85
          span:first-child 
            margin-right 20px
      
</style>