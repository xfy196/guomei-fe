<template>
  <div id="content">
    <ul class="msg-list" v-for="item in msgList" :key="item.id">
      <li :class="item.source">
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
      msgList: [
        {
          id: "00001",
          source: 'mine',
          msg: '你好',
          img: 'http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png'
        },
        {
          id: "00002",
          source: 'guide',
          msg: '请问有什么可以帮到你?请问有什么可以帮到你?请问有什么可以帮到你?',
          img: 'http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg'
        },
        {
          id: "00003",
          source: 'mine',
          msg: '你好',
          img: 'http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png'
        },
        {
          id: "00004",
          source: 'guide',
          msg: '请问有什么可以帮到你?',
          img: 'http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg'
        },
        {
          id: "00005",
          source: 'mine',
          msg: '你好',
          img: 'http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png'
        },
        {
          id: "00006",
          source: 'guide',
          msg: '请问有什么可以帮到你?',
          img: 'http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg'
        },
        {
          id: "00007",
          source: 'mine',
          msg: '你好',
          img: 'http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png'
        },
        {
          id: "00008",
          source: 'guide',
          msg: '请问有什么可以帮到你?',
          img: 'http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg'
        },
        {
          id: "00009",
          source: 'mine',
          msg: '你好',
          img: 'http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png'
        },
        {
          id: "00010",
          source: 'guide',
          msg: '请问有什么可以帮到你?',
          img: 'http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg'
        },
        
      ]
    }
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