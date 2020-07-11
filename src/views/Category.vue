<template>
  <div>
    <SearchTop></SearchTop>
    <div>
      <van-tree-select
        height="55vw"
        :items="items"
        :main-active-index.sync="active"
      >
        <template #content>
          <van-image
            v-if="active === 0"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
          <van-image
            v-if="active === 1"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </template>
      </van-tree-select>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { TreeSelect } from "vant";

Vue.use(TreeSelect);
import SearchTop from "@/common/SearchTop";
export default {
  components: {
    SearchTop,
  },
   data() {
    return {
      active: 0,
      items: [
        {
          id : '17951827',
          text : "热门分类"
        },
        {
          id: "17951828",
          text: "手机数码"
        },
        {
          id: "17951830",
          text : "电脑办公"
        },
        {
          id: "17951830",
          text: "电视影音"
        },
        {
          text : "空调冰洗"
        }
      ],
    };
  },
};
</script>

<style></style>
