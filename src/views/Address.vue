<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopBar></TopBar>
    <!-- 地址列表 -->
    <div class="no-address">
      <img src="../assets/noMessage.png" alt="">
      <p>您还没有收货地址</p>
    </div>
    <!-- 底部新增地址 -->
    <footer class="add-address" @click="goAddNewAddress">新增地址</footer>
  </div>
</template>

<script>
import TopBar from '@/Address/TopBar'
export default {
  components: {
    TopBar
  },
  methods: {
    goAddNewAddress(){
      this.$router.push('/addNewAddress')
    }
  },
}
</script>

<style lang="stylus" scoped>
.no-address
  margin-top 100px
  text-align center
  img 
    height 160px
  p 
    font-size 13px
    color #919599
    line-height 3
.add-address
  height 45px
  line-height 45px
  position absolute
  width 100%
  bottom 0
  text-align center
  font-size 16px
  font-weight 600
  background: linear-gradient(90deg,#fa1e8c,#fc1e56);
  color #ffffff
</style>