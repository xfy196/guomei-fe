<template>
  <div id="message-list">
    <div class="no-message" v-if="!hasMsg">
      <img src="../../assets/noMessage.png" alt="">
      <p>暂无客服聊天信息哟</p>
    </div>
    <div id="has-message" v-else>
      <div class="dialog" @click="goChat">
        <img src="http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg" alt="">
        <div class="detail">
          <div class="info">
            <span class="name">李昂</span>
            <span class="date">7月26日</span>
          </div>
          <div class="content">你好</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasMsg: true
    }
  },
  methods: {
    goChat() {
      this.$router.push({
        path: '/chat',
        query: {
          guideName: '李昂'
        }
      })
    }
  },
  mounted(){
    this.hasMsg = this.$store.state.message.msgList.length === 0 ? false : true
  }
}
</script>

<style lang="stylus" scoped>
  #message-list
    height 286px
    display flex
    .no-message
      text-align center
      margin 40px auto
      img 
        height 160px
      p 
        font-size 13px
        color #919599
        line-height 40px
    #has-message
      width 100%
      .dialog
        margin 2px 0
        width 100%
        padding 0 15px
        height 69px
        background-color #ffffff
        display flex
        align-items center
        img 
          width 49px
          height 49px
          margin-right 15px
        .detail
          height 49px 
          flex 1
          display flex
          flex-direction column
          justify-content space-around
          .info
            display flex
            justify-content space-between
            .name
              font-size 17px
              font-weight 600
              line-height 20px
            .date
              font-size 12px
              color #ccc
              line-height 20px
          .content
            font-size 13px
            color #9b9b9b

        
</style>