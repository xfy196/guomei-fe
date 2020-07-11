<template>
  <div id="goods-tabs">
    <van-tabs v-model="active" title-active-color="#f10" class="tabbar" @chang="handleChange">
      <van-tab v-for="item in tabList" :key="item.title" class="tabbar-item" title>
        <template #title>
            <p class="title">{{ item.title }}</p>
            <div class="slogan">{{ item.slogan }}</div>
        </template>
        商品列表
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 'all',
      tabList: [
        {
          name: "all",
          title: "全部",
          slogan: "猜你喜欢"
        },
        {
          name: "cool",
          title: "清凉一夏",
          slogan: "冰爽来袭"
        },
        {
          name: "electric",
          title: "品牌家电",
          slogan: "一站购齐"
        },
        {
          name: "refrigerator",
          title: "冰箱洗衣机",
          slogan: "特惠嗨购"
        },
        {
          name: "phone",
          title: "手机电脑",
          slogan: "性价比推荐"
        },
        {
          name: "family",
          title: "居家好物",
          slogan: "幸福感爆棚"
        },
      ]
    }
  },
  methods: {
    handleChange(index){
      console.log(index);
    }
  }
}
</script>

<style lang="stylus" scoped>
#goods-tabs
  width 100%
  overflow scroll
  background-color #f3f5f7
  border-top-left-radius 20px
  border-top-right-radius 20px
  margin-bottom 5px
  line-height 1
  .tabbar
    text-align center
    width max-content
    /deep/.van-tabs__wrap
      padding-right 0
      height 56px
      /deep/.van-tabs__nav
        .van-tab
          .title 
            font-size 15px !important 
            height 15px
            color #262c32
            margin-bottom 3px
            white-space nowrap
          .slogan
            padding 2px 4px
            font-size 12px
            transform scale(0.9)
            color #999
        .van-tab--active
          .title 
            color #f20c59
            font-weight 700
          .slogan
            border-radius  3px
            background-image: linear-gradient(90deg,#ff0a8d 10%,red)
            color #fff
</style>