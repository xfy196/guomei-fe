<template>
  <main>
    <van-tabs
      v-model="activeIndex"
      :swipeable="false"
      class="tabs"
      @change="handleChange"
      :border="false"
      background="#f20c59"
    >
      <div slot="nav-right">
        <div @click="handleClick" class="category">
          <img
            class="nv-bg"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAABYBAMAAAAZ9PqaAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWNxwqAAAACHRSTlMIBQwcEBcUAxo/uM4AAADjSURBVDjLzMyxDQMhDEBR6yY4VkBswAroFkCMEHqqrB/7OxZFclLKuOLpY8vTJzEIoMDW4nmKICCCSACB0AIhDtjk7HKYlqcjhyiuhEjNdHoqDZEUqoUAOkktFGlOSS4Den+8toqlx0AkhYo1SyNUSK4DKbYsVWRrqq4SlyWUM2v1qzjSt+aNDle91dhqH+q/6fpbvSqpYxMAYBgGgstl/5lCivBwYEJK40761/q5zOWV4Jy8Hc1t0jtMwEsswRkMwifsxrXM40Ou4BGO4R9u5i1O63tbcN53J87hhrgvbk+7tAHn5tBxntciCgAAAABJRU5ErkJggg=="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA7fOC11I4Ecy1PfWfi21oZTAiCOcL1HjnAAAAdElEQVQ4y+WTyQ6AIBBDQVZxX/r/vypGzCQKmbPYSw+8NKTpiC/LajmykAawRp8lXupUgs43G90joyZBCvCCSxLBbKJauaFfWKgFpItuZKbLu6cGQLjgDPVM2vNJ9Kd6xe+JljmVG6eN61LjdC3lJLq7/+oAXBYRruLDsRwAAAAASUVORK5CYII="
            class="icon"
          />
          <span class="c-text">分类</span>
        </div>
      </div>
      <van-tab
        title-style="color:#fff;"
        v-for="(item, index) in navlist"
        :title="item"
        :key="index + Math.random()"
      >
        <div @scroll="handleScroll" class="container">
          <component :is="navComponents[index]"> </component>
        </div>
      </van-tab>
    </van-tabs>
  </main>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import Comfortable from "@/Home/Comfortable/Comfortable";
import Butter from "@/Home/Butter/Butter";
import Cupboard from "@/Home/Cupboard/Home";
import Selected from "@/Home/Selected/Selected";
import PhoneShop from "@/Home/PhoneShop/PhoneShop";

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
      activeIndex: 0,
      navComponents: [
        "Selected",
        "PhoneShop",
        "Butter",
        "Cupboard",
        "Comfortable",
      ],
    };
  },
  beforeCreate() {
    this.$store.dispatch("modifyGoTop", false);
  },
  mounted() {
    document.querySelector(".van-tabs__wrap").style.paddingRight = "1.6rem";
  },
  methods: {
    handleChange(index) {
      this.activeIndex = index;
      document.querySelector(".container").scrollTo({
        top: 0,
      });
    },
    handleClick() {
      this.$router.push("/categories");
    },
    handleScroll(e) {
      if (e.target.scrollTop > 200) {
        this.$store.dispatch("modifyGoTop", true);
      } else {
        this.$store.dispatch("modifyGoTop", false);
      }
    },
  },
  components: {
    Cupboard,
    Butter,
    Selected,
    Comfortable,
    PhoneShop,
  },
};
</script>
<style lang="stylus" scoped>
@import "~assets/stylus/theme.styl";

main
  flex 1
  height 100%
  overflow hidden
  .tabs
    height 44px
    line-height 44px
    height 100%
    display: flex;
    flex-direction: column;
    /deep/.van-tabs__content
          height 100%
          overflow hidden
          flex 1
      /deep/.van-tabs__line
        background-image: linear-gradient(270deg,hsla(0,0%,100%,.51),#fff);
    .category
        height 44px
        background-color $themeBgColor
        line-height 44px
        color #fff
        display flex
        position fixed
        align-items center
        right 0
        z-index 99
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
    .container
      overflow scroll
      height 100%
      .van-pull-refresh
        overflow auto

/deep/.van-tabs__content
        .van-tab__pane
          height 100%
</style>
