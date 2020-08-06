<template>
  <div id="content">
    <ul class="msg-list">
      <li :class="item.source" v-for="item in msgList" :key="item.id">
        <p>{{ item.msg }}</p>
        <img :src="item.img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgList: []
    }
  },
  mounted() {
    this.msgList = this.$store.state.message.msgList;
  },
}
</script>

<style lang="stylus" scoped>
#content
  width 100%
  height calc(100% - 96px)
  overflow scroll
  background-color #ECECEC
  padding 15px 10px 0px
  .msg-list
    .mine
      margin-bottom 15px
      display flex
      justify-content flex-end
      p 
        font-size 16px
        color #ffffff
        background-color #22c88b
        max-width 254px
        padding 10px 12px
        border-radius 10px
        border-top-right-radius none
      img 
        height 44px
        margin-left 10px
    .guide
      margin-bottom 15px
      display flex
      flex-direction: row-reverse
      justify-content flex-end
      p 
        font-size 16px
        color #000000
        background-color #ffffff
        max-width 254px
        padding 12px
        border-radius 10px
        border-top-right-radius none
      img 
        height 44px
        margin-right 10px
</style>