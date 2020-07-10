<template>
  <div id="goods-tabs">
    <van-tabbar v-model="active" active-color="#f20c59" inactive-color="#262c32" class="tabbar" @change="handleChange">
      <van-tabbar-item v-for="item in tabList" :key="item.title" class="tabbar-item">
        <div class="category">
          <p class="title">{{ item.title }}</p>
          <div class="slogan">{{ item.slogan }}</div>
        </div>
      </van-tabbar-item>
    </van-tabbar>
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
  .tabbar
    position static
    height 56px
    width max-content
    .tabbar-item
      text-align center
      .category
        padding 0 20px
        border-right 0.3px solid #eeeeee
        .title 
          font-size 15px !important 
          color #262c32
          margin-bottom 4px
          white-space nowrap
        .slogan
          font-size 12px
          transform scale(0.9)
          color #999
</style>