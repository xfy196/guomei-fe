<template>
  <div class="information">
    <div class="information-content">
      <InforTop></InforTop>
      <InforDetail></InforDetail>
      <InforExit></InforExit>
    </div>
  </div>
</template>

<script>
import InforTop from '@/Information/InforTop'
import InforDetail from '@/Information/InforDetail'
import InforExit from '@/Information/InforExit'
export default {
  components : {
    InforTop,
    InforDetail,
    InforExit
  }
}
</script>

<style lang="stylus" scoped>
.information
  height 100%
  overflow scroll
</style>