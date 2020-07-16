<template>
  <div id="goods-tabs">
    <van-tabs v-model="active" title-active-color="#f10" class="tabbar" @chang="handleChange">
      <van-tab v-for="(item, index) in tabList" :key="item.title" class="tabbar-item" title>
        <template #title>
            <p class="title">{{ item.title }}</p>
            <div class="slogan">{{ item.slogan }}</div>
        </template>
        <div class="gui-waterfall-container">
          <waterfall
            :width="itemWidth"
            :col="col"
            :data="goodsList"
            :isTransition="true"
            :gutterWidth="gutterWidth"
          >
            <component
              v-for="(item,key) in goodsList"
              :key="item.productId + key"
              :item="item"
              :is="componentLists[index]"
            ></component>
          </waterfall>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import ShopItemCart from "@/common/shop-item-cart";
import axios from "axios";
import waterfall from "vue-waterfall2";
Vue.use(waterfall);
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
      ],
      goodsList: [],
      col: 2,
      componentLists: [
        "ShopItemCart",
        "ShopItemCart",
        "ShopItemCart",
        "ShopItemCart",
        "ShopItemCart",
        "ShopItemCart",
      ],
    }
  },
  computed: {
    // 瀑布流宽度
    itemWidth() {
      return 351 * 0.5 * (document.documentElement.clientWidth / 375);
    },
    // 瀑布流间距
    gutterWidth() {
      return 16 * 0.5 * (document.documentElement.clientWidth / 375);
    },
  },
  methods: {
    handleChange(index){
      console.log(index);
    },
  },
  created(){
    axios({
      url: '/api/recommend'
    })
      .then((res) => {
        this.goodsList = res.data.goodsList;
      })
  },
  components: {
    ShopItemCart,
  },
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
    width 100% !important
    width max-content
    /deep/.van-tabs__wrap
      text-align center
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