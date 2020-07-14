<template>
  <div>
    <!-- 顶部导航栏 -->
    <TopBar></TopBar>
    <!-- 地址编辑栏 -->
    <AddressEdit></AddressEdit>
  </div>
</template>

<script>
import TopBar from '@/AddNewAddress/TopBar';
import AddressEdit from '@/AddNewAddress/AddressEdit';

export default {
  components: {
    TopBar,
    AddressEdit
  }
}
</script>

<style lang="stylus" scoped>

</style>