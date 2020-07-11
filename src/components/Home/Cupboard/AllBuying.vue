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
            <div class="listContainer">
                <div>11</div>
                <div>222</div>
            </div>
            </van-tab
          >
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tabs, Tab } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      tabTitles: ["饭盒", "夏季爆款", "厨具套装", "炒锅"],
    };
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

.listContainer
    display flex
    div
        padding-left 10px
        flex auto
</style>
