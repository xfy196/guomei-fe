<template>
  <div class="tel_box">
    <div class="good_container">
      <SearchTop></SearchTop>
      <van-dropdown-menu active-color="red">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="value3" :options="option3" />
        <van-dropdown-item v-model="value4" :options="option4" />
      </van-dropdown-menu>
      <van-sticky>
        <div class="phnav">
          <ul>
            <li class="phnav_1">国美经营</li>
            <li class="phnav_2">团购商品</li>
            <li class="phnav_3">屏幕尺寸</li>
            <li class="phnav_4">机身内存</li>
          </ul>
        </div>
      </van-sticky>
      <div class="good_list">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- 商品 -->
            <div class="good_item" v-for="item in list" :key="item.productId + '' + Math.random()">
              <span class="gd_img">
                <img :src="item.productImgURL" alt />
              </span>
              <div class="gd_img2 border-bottom">
                <h3 class="title">
                  <em class="pic_l"></em>
                  {{ item.goodsName }}
                </h3>
                <div class="troud">
                  <p class="flex_bd">
                    <i class="phnc">128GGG</i>
                    <span>机身内存</span>
                  </p>
                  <p class="flex_bd">
                    <i>128GGG</i>
                    <span>运行内存</span>
                  </p>
                  <p class="flex_bd">
                    <i>128GGG</i>
                    <span>屏幕尺寸</span>
                  </p>
                </div>
                <div class="price">
                  <div class="pricenum">￥{{ item.price }}</div>
                </div>
                <div class="cnt">
                  <span class="fenqi">易卡分期</span>
                </div>

                <a href class="z_dis">{{item.skuNo}}人评论</a>
                <span class="adds">北京国美公主坟店</span>
                <a href class="check">
                  <em class="showadds">该商品多家店铺在售</em>
                  <i class="showadds2">查看</i>
                </a>
              </div>
            </div>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import { DropdownMenu, DropdownItem, Sticky, Lazyload, List } from "vant";
import SearchTop from "@/common/SearchTop";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Sticky);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(Lazyload, {
  lazyComponent: true
});
export default {
  components: {
    SearchTop
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "3",
      value4: "4",
      option1: [
        { text: "综合", value: 0 },
        { text: "评论从高到低", value: 1 },
        { text: "评论从低到高", value: 2 }
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "价格从高到低", value: "b" },
        { text: "价格从低到高", value: "c" }
      ],
      option3: [{ text: "销量", value: "3" }],
      option4: [{ text: "筛选", value: "4" }],

      active: 1,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      start: 0,
      limit: 10
    };
  },
  created() {
    let { id } = this.$route.query;
    axios({
      url: "/ajax/telphone/goodsList",
      params: {
        c3id: id,
        _start: this.start,
        _limit: this.limit
      }
    }).then(result => {
      this.list = [...result.data];
    });
  },
  methods: {
    onLoad() {
      let { id } = this.$route.query;
      this.start += 10;
      axios({
        url: "/ajax/telphone/goodsList",
        params: {
          c3id: id,
          _start: this.start,
          _limit: this.limit
        }
      }).then(result => {
        if (result.data.length === 0) {
          this.finished = true;
        } else {
          this.loading = false;
          this.list = [...this.list, ...result.data];
        }
      });
    },
    onRefresh() {
      let { id } = this.$route.query;

      axios({
        url: "/ajax/telphone/goodsList",
        params: {
          c3id: id,
          _start: Math.floor(Math.random() * 20),
          _limit: 1
        }
      }).then(result => {
        this.refreshing = false;
        this.list = [...result.data, ...this.list];
      });
    }
  }
};
</script>

<style lang="stylus" scope="">
.tel_box {
  height: 100%;
}

.phnav {
  padding: 8px 3px;
  border-bottom: 1px solid #f3f5f7;
  background: #ffffff;
  overflow: hidden;
}

.phnav ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.phnav li {
  width: 166px;
  position: relative;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  justify-content: space-around;
  width: 24%;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #f3f5f7;
  color: #999;
  border-radius: 1px;
  box-sizing: border-box;
  font-size: 12px;
}

.good_container {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.good_item {
  width: 375px;
  height: 181px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
}

.gd_img {
  margin-right: 11px;
  background-color: #fff;
  width: 125px;
  height: 125px;
}

.gd_img img {
  width: 100%;
  height: 100%;
}

.gd_img2 {
  display: flex;
  width: 234px;
  padding-right: 5px;
  flex-direction: column;
}

.good_list {
  flex: 1;
  height: 100%;
}

.good_list .title {
  line-height: 18px;
  font-size: 14px;
  font-weight: 500;
  word-break: break-all;
  white-space: normal;
  word-wrap: break-word;
  margin: 0px 1px 0 0;
  vertical-align: -0.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: bolder;
}

.troud {
  margin-top: 3px;
  white-space: nowrap;
  overflow: hidden;
  width: 225px;
}

.troud p {
  display: inline-block;
  padding: 0 5px;
  text-align: center;
  overflow: hidden;
  line-height: 1;
  width: 73px;
  height: 27px;
  float: left;
}

.troud p span {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  white-space: normal;
  word-break: break-all;
}

.troud .flex_bd i {
  font-size: 12px;
  color: #262C32;
  height: 14px;
  line-height: 14px;
  display: block;
  width: 68px;
}

.troud .flex_bd span {
  margin-top: 3px;
  font-size: 9px;
  color: #919599;
  height: 10px;
  line-height: 10px;
  display: block;
}

.price {
  margin-right: 2px;
  padding-top: 5px;
  font-size: 16px;
  color: #F20C59;
}

.cnt {
  height: 18px;
}

.fenqi {
  vertical-align: top;
  display: inline-block;
  font-size: 18px;
  transform: scale(0.5);
  transform-origin: left center;
  line-height: 10px;
  color: #7A7F85;
  box-sizing: border-box;
  margin-right: 3px;
  padding: 4px 6px;
  border: 1px solid #F20C59;
  border-radius: 2px;
  color: #F20C59;
  overflow: hidden;
}

.z_dis {
  font-size: 1px;
  display: block;
  color: #929292;
}

.adds {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 1px;
  color: #929292;
  display: block;
}

.check {
  width: 239px;
  height: 16px;
  font-size: 12px;
  display: block;
}

.showadds {
  font-family: PingFangSC-Regular, sans-serif;
  font-size: 1px;
  color: #929292;
  line-height: 16px;
  height: 13px;
}

.showadds2 {
  color: #262C32;
  margin-left: 5px;
  padding-right: 8px;
  background: url('https://css.gomein.net.cn/plus/style/shop_search_list/images/list-more.4fea6581fb.png') 100% 50% no-repeat;
  background-size: 8px 8px;
  font-size: 1px;
  height: 13px;
}

.borderbottom::before {
}
</style>
