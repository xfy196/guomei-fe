<template>
  <div class="content">
    <SearchTop></SearchTop>
    <div class="catetoryContainer">
      <van-sidebar
        class="cate-sildebar"
        @change="handleChange"
        v-model="active"
      >
        <van-sidebar-item
          v-for="item in items"
          :title="item.text"
          :key="item.id"
        />
      </van-sidebar>
      <div class="catetory-content">
        <div class="catetory-box">
          <div class="scroller">
            <div
              class="cat-list"
              :data-index="index"
              v-show="index === active"
              style="transform-origin: 0px 0px; opacity: 1; transform: scale(1, 1);"
              v-for="(item, index) in catetories"
              :key="index"
            >
              <div class="banner" v-if="item.imageUrl">
                <router-link title="item.activityTitle" to="#" tag="a"
                  ><img
                    class="loading-img default-bg-sm"
                    :src="item.imageUrl"
                    v-lazy="item.imageUrl"
                    style="opacity: 1; transition: opacity 0.3s ease 0s;"
                /></router-link>
              </div>
              <div
                :class="d.goodsTypeName === '热门品牌' ? 'brand item' : 'item'"
                v-for="d in item.secondLevelCategories"
                :key="d.goodsTypeId"
              >
                <h3 class="title" :alt="d.goodsTypeName">
                  {{ d.goodsTypeName }}
                </h3>
                <ul class="list">
                  <li
                    v-for="v in d.goodsTypeList"
                    :key="v.goodsTypeId + String(Math.random())"
                  >
                    <router-link tag="a" to="#">
                      <img
                        class="loading-img default-bg-sm"
                        :src="v.goodsTypeImgUrl"
                        v-lazy="v.goodsTypeImgUrl"
                        style="opacity: 1; transition: opacity 0.3s ease 0s;"
                      />
                      <span class="name">{{
                        v.goodsTypeName
                      }}</span></router-link
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Sidebar, SidebarItem, Lazyload } from "vant";
import axios from "axios";
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Lazyload);
import SearchTop from "@/common/SearchTop";
export default {
  components: {
    SearchTop,
  },
  created() {
    this.catetories = new Array(20).fill("");
    axios({
      url: "/ajax/cateLists",
      params: {
        ctl: "goods_class",
        act: "ajaxGetClassList",
        cid: "17951827",
      },
    })
      .then((data) => {
        if ((data.status === 200 && data.statusText) === "OK") {
          this.$set(this.catetories, this.active, data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    handleChange(index) {
      axios({
        url: "/ajax/cateLists",
        params: {
          ctl: "goods_class",
          act: "ajaxGetClassList",
          cid: this.items[index].id,
        },
      })
        .then((data) => {
          if ((data.status === 200 && data.statusText) === "OK") {
            console.log(index);
            this.$set(this.catetories, index, data.data);
            this.active = index;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      active: 0,
      items: [
        {
          id: "17951827",
          text: "热门分类",
        },
        {
          id: "17951828",
          text: "手机数码",
        },
        {
          id: "17951829",
          text: "电脑办公",
        },
        {
          id: "17951830",
          text: "电视影音",
        },
        {
          id: "17951831",
          text: "空调冰洗",
        },
        {
          id: "17951832",
          text: "厨房卫浴",
        },
        {
          id: "17951833",
          text: "生活电器",
        },
        {
          id: "17951834",
          text: "美妆个护",
        },
        {
          id: "17951836",
          text: "母婴玩具",
        },
        {
          id: "17951837",
          text: "成人保健",
        },
        {
          id: "17951838",
          text: "服饰鞋帽",
        },
        {
          id: "17951839",
          text: "服饰鞋帽",
        },
        {
          id: "17951840",
          text: "箱包奢品",
        },
        {
          id: "17951841",
          text: "钟表首饰",
        },
        {
          id: "17951842",
          text: "住宅家具",
        },
        {
          id: "17951843",
          text: "家装建材",
        },
        {
          id: "17951844",
          text: "家居日用",
        },
        {
          id: "17951845",
          text: "床品家纺",
        },
        {
          id: "17951846",
          text: "汽车用品",
        },
        {
          id: "17951847",
          text: "黄金收藏",
        },
      ],
      catetories: [],
    };
  },
};
</script>

<style lang="stylus">
.content
  height 100%
  display flex
  flex-direction column
  .catetoryContainer
    display flex
    flex 1
    height 100%
    overflow hidden
    .cate-sildebar
      overflow scroll
      font-size 14px
      background-color #F0F0F0
    .catetory-content
      height 100%
      overflow-y auto
      -webkit-overflow-scrolling touch
      background #fff
      flex 1
      word-wrap break-word
      word-break break-all
      padding 8px 8px 3px
      h3
        font-size: 10px;
        padding-bottom: 10px;
        color: #999
      .item
        .list
          overflow hidden
          li
            float: left;
            width: 31%;
            margin-right: 2.3%;
            margin-bottom: 8px;
            background: #F8F8F8;
            text-align: center;
            overflow: hidden;
            a
              display: block;
              padding: 5px 5px 0;
              width: 100%;
              height: 100%;
              background: 0 0;
              &:link
                color #666
            img
              width: 76px;
              height: 76px;
              margin: 0 auto;
              border: 0;
              background: #f8f8f8;
            span
              height: 24px;
              line-height: 24px;
              text-align: center;
              font-size: 11px;
              color: #666;
              overflow: hidden;
              word-break: break-all;

.brand
  .list
    li
      height: 50px;
      a
        padding 8px !important
        img
          width 72px !important
          height 34px !important

.banner
  width: 100%;
  display: block;
  margin-bottom: 10px
  img
    width: 100%;
    height: 86px;
    max-height: 86px
</style>
