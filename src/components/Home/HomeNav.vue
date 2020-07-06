<template>
    <nav>
        <van-tabs @change="handleChange" color="#ffffff" background="#f20c59">
        <van-tab title-style="color:#fff" v-for="(item, index) in navlist" :title="item" :key="index">
          <slot name="Swipe"></slot>
        </van-tab>
        </van-tabs>
        <div class="category">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA7fOC11I4Ecy1PfWfi21oZTAiCOcL1HjnAAAAdElEQVQ4y+WTyQ6AIBBDQVZxX/r/vypGzCQKmbPYSw+8NKTpiC/LajmykAawRp8lXupUgs43G90joyZBCvCCSxLBbKJauaFfWKgFpItuZKbLu6cGQLjgDPVM2vNJ9Kd6xe+JljmVG6eN61LjdC3lJLq7/+oAXBYRruLDsRwAAAAASUVORK5CYII=" class="icon">
            <span>分类</span>

        </div>
    </nav>

</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      navlist: [
        "精选",
        "手机电脑",
        "国美电器",
        "橱柜厨具",
        "国美家电",
        "舒适家",
        "超市百货",
        "家居家装"
      ],
    }
  },
  methods: {
      handleChange(name, title){
          console.log(name, title);
      }
  },
};
</script>
<style lang="stylus" scoped>
nav 
    position relative
    .category
        height .183333rem
        background-color #f20c59
        line-height .183333rem
        color #fff 
        display flex
        position absolute
        align-items center
        right 0
        top 0
        padding-right .0125rem
        .icon
            width .083333rem
            height .083333rem
</style>