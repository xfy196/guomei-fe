<template>
  <!-- 左中右结构 -->
  <div class="h-left">
    <a @click="$router.go(-1)" class="h-back" id="goback">
      <van-icon
        class="left-arrow"
        size=".7rem"
        name="arrow-left"
        color="#626262"
      />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.h-back
    margin-left 12px
    font-size 16px
    display inline-block
    color #666
    height 44px
    line-height 1
    display flex
    align-items center
</style>
