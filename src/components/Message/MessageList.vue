<template>
  <div id="message-list">
    <div class="no-message">
      <img src="../../assets/noMessage.png" alt="">
      <p>暂无客服聊天信息哟</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  #message-list
    height 286px
    display flex
    justify-content center
    align-items center
    .no-message
      text-align center
      img 
        height 160px
      p 
        font-size 13px
        color #919599
        line-height 3
</style>