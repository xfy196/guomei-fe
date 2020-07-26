<template>
  <div id="guide-list">
    <div class="title">金牌导购推荐</div>
    <div class="guide-item" v-for="guide in guideList" :key="guide.orgi">
      <div class="photo"><img :src="`http:${guide.imgUrl}`" alt=""></div>
      <div class="info van-hairline--bottom">
        <div class="connection">
          <div class="left">
            <p>{{ guide.salesAssistantName }}</p>
            <h3>{{ guide.grade }}</h3>
          </div>
          <div class="right" @click="goChat(guide.salesAssistantName)">
            <img src="../../assets/connect.png" alt="">
            <p>咨询</p>
          </div>
        </div>
        <div class="service">已服务 {{ guide.numberOfPeopleServed }} 单</div>
        <div class="brand">所属品牌: {{ guide.goodAtBrand.join(' ') }}</div>
        <ul class="category">
          <!-- <li v-for="item in guide.goodAtCategory" :key="item">{{ item }}</li> -->
          <li>空调</li>
          <li>彩电</li>
          <li>延保</li>
          <li>彩电配件</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      guideList: []
    }
  },
  methods: {
    goChat(name) {
      this.$router.push({
        path: '/chat',
        query: {
          guideName: name
        }
      })
    }
  },
  mounted() {
    axios({
      url: '/api/shoppingGuide'
    })
    .then((res) => {
      this.guideList = res.data.dataInfo;
    })
  },
}
</script>

<style lang="stylus" scoped>
  #guide-list
    background #ffffff
    padding 0 16px
    .title
      height 50px
      line-height 50px
      font-size 17px
      font-weight 600
  .guide-item
    display flex
    margin-top 10px
    .photo
      margin-right 12px
      width 60px
      border-radius 50%
      img  
        width 100%
        border-radius 50%
    .info
      padding-bottom 8px
      flex 1
      .connection
        display flex
        justify-content space-between
        .left
          p 
            font-size 17px
            font-weight 600
            line-height 1
            width 60px
            text-align center
            margin-bottom 5px
          h3 
            font-size 12px
            transform scale(0.9)
            color #fff
            background-color #e6b365
            padding 0 3px
            border-radius 5px
        .right
          width 42px
          height 42px
          background-color #fff3e2
          border-radius 50%
          display flex
          flex-direction column
          justify-content center
          align-items center
          img 
            width 13px
          p 
            font-size 12px
            color #c48d3a
            transform scale(0.9)
    .service
      width 100%
      margin-top 2px
      font-size 14px
      transform scale(0.85)
      transform-origin 0 0
      line-height 1.1
      color #919599
    .brand
      width 270px
      margin-top 2px
      font-size 14px
      transform scale(0.85)
      transform-origin 0 0
      line-height 1.1
      color #919599
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
    .category
      margin-top 4px
      display flex
      li
        font-size 12px
        transform scale(0.95)
        color #262c32
        background-color #f3f5f7
        padding 1px 8px
        border-radius 10px
        margin-right 6px





</style>