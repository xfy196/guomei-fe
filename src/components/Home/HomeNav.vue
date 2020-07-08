<template>
    <nav>
        <van-tabs class="tabs" @change="handleChange" :border=border background="#f20c59">
        <van-tab title-style="color:#fff" v-for="(item, index) in navlist" :title="item" :key="index">
          <div class="container">
            <component :is="navComponentLists[index]">

            </component>

          </div>
        </van-tab>
        </van-tabs>
        <div class="category">
          <img class="nv-bg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAABYBAMAAAAZ9PqaAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAACHRSTlMIBQwcEBcUAxo/uM4AAADjSURBVDjLzMyxDQMhDEBR6yY4VkBswAroFkCMEHqqrB/7OxZFclLKuOLpY8vTJzEIoMDW4nmKICCCSACB0AIhDtjk7HKYlqcjhyiuhEjNdHoqDZEUqoUAOkktFGlOSS4Den+8toqlx0AkhYo1SyNUSK4DKbYsVWRrqq4SlyWUM2v1qzjSt+aNDle91dhqH+q/6fpbvSqpYxMAYBgGgstl/5lCivBwYEJK40761/q5zOWV4Jy8Hc1t0jtMwEsswRkMwifsxrXM40Ou4BGO4R9u5i1O63tbcN53J87hhrgvbk+7tAHn5tBxntciCgAAAABJRU5ErkJggg==" alt="">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA7fOC11I4Ecy1PfWfi21oZTAiCOcL1HjnAAAAdElEQVQ4y+WTyQ6AIBBDQVZxX/r/vypGzCQKmbPYSw+8NKTpiC/LajmykAawRp8lXupUgs43G90joyZBCvCCSxLBbKJauaFfWKgFpItuZKbLu6cGQLjgDPVM2vNJ9Kd6xe+JljmVG6eN61LjdC3lJLq7/+oAXBYRruLDsRwAAAAASUVORK5CYII=" class="icon">
            <span class="c-text">分类</span>

        </div>
    </nav>

</template>

<script>
import Vue from "vue";


import { Tab, Tabs } from "vant";
import Comfortable from "@/Home/Comfortable/Comfortable"
import Cupboard from "@/Home/Cupboard/Home"
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      navlist: [
        "精选",
        "手机电脑",
        "国美管家",
        "橱柜厨具",
        "舒适家",
        "国美家电",
        "超市百货",
        "家居家装",
      ],
      border: false,
      navComponentLists : ["","", "", "Cupboard","Comfortable"]
    }
  },
  methods: {
      handleChange(name){

      }
  },
  components : {
    Cupboard,
    Comfortable
  }
};
</script>
<style lang="stylus" scoped>
nav 
  position relative
  /deep/.van-tabs__wrap
    padding-right 60px
    /deep/.van-tabs__line
      background-image: linear-gradient(270deg,hsla(0,0%,100%,.51),#fff);
  .category
      height 45px
      background-color #f20c59
      line-height 44px
      color #fff 
      display flex
      position absolute
      align-items center
      right 0
      top -1px
      padding-right 5px
      .nv-bg
        width: .34667rem;
        height: 1.17333rem;
        display: inline-block;
      .c-text
        font-size 14px
        color #ffffff
      .icon
        width 18px
        height 18px

</style>