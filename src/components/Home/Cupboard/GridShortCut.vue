<template>
  <div class="grid-bg">
        <ul class="grid-lists">
                <li class="grid-item" v-for="(item, index) in GridLists" :key="index">
                    <a href="#">

                        <img :src="item.img" class="grid-img" alt="">
                        <span class="grid-text">{{item.title}}</span>
                    </a>
                </li>

        </ul>
        <!-- <van-grid-item v-for="(item, index) in GridLists" :key="index" :icon="item.img" :text="item.title" /> -->
<!--     <van-grid :column-num="3">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid> -->
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      isBorder: false,
      GridLists: [
        {
          img:
            "http://gfs5.gomein.net.cn/wireless/T1HaC4BKbj1RCvBVdK_213_150.png",
          title: "烹饪锅具"
        },
        {
          img:
            "http://gfs5.gomein.net.cn/wireless/T1GFD4BXJT1RCvBVdK_213_150.png",
          title: "厨房电器"
        },
        {
          img:
            "http://gfs8.gomein.net.cn/wireless/T13zd4BmCT1RCvBVdK_213_150.png",
          title: "清洁收纳"
        },
        {
          img:
            "http://gfs5.gomein.net.cn/wireless/T1NyV4BChg1RCvBVdK_213_150.png",
          title: "炊具"
        },
        {
          img:
            "http://gfs9.gomein.net.cn/wireless/T1Ka_4BgCg1RCvBVdK_213_150.png",
          title: "餐饮用具"
        },
        {
          img:
            "http://gfs9.gomein.net.cn/wireless/T1laA4BQA_1RCvBVdK_213_150.png",
          title: "厨房小件"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.grid-bg
  padding .16rem 0
  width: 355px;
  background-color: #ffffff;
  margin: 0 auto 8px;
  border-radius: 0.32rem;
  overflow: hidden;
  .grid-lists
    padding-top: .29333rem;
    width 100%
    display flex
    align-items center
    justify-content space-between
    flex-wrap wrap 
    .grid-item
        width 30%
        margin-bottom: .29333rem;
        a
            display flex
            flex-direction column
            justify-content center
            align-items center
            color #262c32
            .grid-img
                width: 1.89333rem;
            .grid-text
                margin-top: .13333rem;
                font-size 12px

</style>