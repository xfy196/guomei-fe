<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopBar></TopBar>
    <!-- 城市选择 -->
    <ChooseCity></ChooseCity>
    <!-- 收货地址 -->
    <AddressList></AddressList>
  </div>
</template>

<script>
import TopBar from '@/Location/TopBar'
import ChooseCity from '@/Location/ChooseCity'
import AddressList from '@/Location/AddressList'
export default {
  components: {
    TopBar,
    ChooseCity,
    AddressList
  },
}
</script>

<style lang="stylus" scoped>

</style>