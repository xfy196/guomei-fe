<!-- 
 * @description:大家都在买板块 
 * @fileName: AllBuying.vue 
 * @author: 小小荧 
 * @date: 2020-07-11 10:28:33
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div
    class="template-margin template-border-display-1"
    style="background-color:transparent;"
  >
    <div
      class="gui-templet-tag-goods-list template-corner0"
      style="background-color:#f2f2f2;"
    >
      <header
        class="template-header"
        style='background: url("http://gfs6.gomein.net.cn/wireless/T1CzE4BsVv1RCvBVdK_1065_150.png") center center / 100% no-repeat rgb(242, 242, 242);'
      >
        <div>&nbsp;</div>
        <a href="" style="display:none;">查看更多</a>
      </header>
      <div class="tabs">
        <van-tabs
          title-inactive-color="#262c32"
          title-active-color="#f20c59"
          background="rgb(242, 242, 242)"
          line-width=".69333rem"
        >
          <van-tab
            v-for="(item, index) in tabTitles"
            :key="index"
            :title="item"
          >
            <van-list
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
              :immediate-check="false"
            >
              <div class="listContainer">
                <div class="gui-waterfall-double-wrapper">
                  <div class="gui-waterfall-container">
                    <ShopItemCart
                      v-for="item in list"
                      :key="item.productId + String(Math.random())"
                      :item="item"
                    ></ShopItemCart>
                  </div>
                </div>
              </div>
            </van-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabs, Tab, List } from "vant";
import ShopItemCart from "@/common/shop-item-cart";
import axios from "axios";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
export default {
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      tabTitles: ["饭盒", "夏季爆款", "厨具套装", "炒锅"],
      list: [],
      loading: false,
      finished: false,
      page: 0,
      limit: 10,
    };
  },
   created() {
    let _start = this.page * 10;
    this.page++;
    let _limit = this.limit;
    axios({
      url: "/goodsList",
      params: {
        _start,
        _limit,
      },
    })
      .then((data) => {
        if (data.status = 200 && data.statusText === "OK" && data.data.length > 0) {
          this.list = data.data;
          this.loading = true
        } else {
          return Promise.reject("网络开小差了");
        }
      })
      .catch((error) => {
        console.log(error);
      });

  },
  methods: {
    onLoad() {
      console.log("sdad")
      let _start = this.page * 10;
      this.page++;
      let _limit = this.limit;
      axios({
        url: "/goodsList",
        params: {
          _start,
          _limit
        },
      }).then((data) => {
        if(data.status = 200 && data.statusText === "OK" && data.data.length>0){
          this.loading = false
          this.list = [
            ...this.list,
            ...data.data
          ]
        }else {
          this.finished = true
        }

      }).catch(err => {
        console.log(err)
      })
    },
  },
  components: {
    ShopItemCart,
  },
};
</script>
<style lang="stylus">
.template-margin
    margin-top .26667rem
    .gui-templet-tag-goods-list
        min-height 10.66667rem
        .template-header
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            padding: 0 .28rem;
            min-height: 1.33333rem;

.van-tabs__wrap
    padding-right 0 !important
    .van-tabs__line
        background-image: linear-gradient(90deg,#ff0a8d 10%,red);
    .van-tab--active
        font-weight bold
        font-size : 16px
.gui-waterfall-container
  margin-top: .13333rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .gui-waterfall-double-item
    width: 4.66667rem;
    color: #262c32;
    background-color: #fff;
    border-radius: .21333rem;
    font-size: .34667rem;
    line-height: .45333rem;
    margin-bottom: .13333rem;
    overflow: hidden;
</style>
