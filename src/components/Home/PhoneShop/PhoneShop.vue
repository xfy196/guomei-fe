<template>
  <div class="main">
    <!-- swper 轮播 -->
    <div class="focusPhoto">
      <div class="template">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>

    <!-- 九宫格 -->

    <div class="Gongge">
      <van-grid :column-num="4" :border="false">
        <van-grid-item
          v-for="value in icons"
          :key="value.id"
          :icon="value.iconimgs"
          :text="value.text"
        />
      </van-grid>
    </div>
    <div class="advertisement">
      <img src="http://gfs9.gomein.net.cn/wireless/T1MKL5ByJv1RCvBVdK_1065_284.png" alt />
    </div>
    <!-- 秒杀 -->
    <div class="Spike">
      <header>
        <img src="http://gfs6.gomein.net.cn/wireless/T1SnY4B4dv1RCvBVdK_1065_150.png" alt />
      </header>
      <Tabs></Tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload, Grid, GridItem } from "vant";

import Tabs from "@/Home/PhoneShop/common/tabs";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  data() {
    return {
      images: [
        "http://gfs7.gomein.net.cn/wireless/T1w7D5Bvxv1RCvBVdK_1069_390.png",
        "http://gfs8.gomein.net.cn/wireless/T1A0V5BmxT1RCvBVdK_1063_390.jpg",
        "http://gfs8.gomein.net.cn/wireless/T1WOC5BKJv1RCvBVdK_1065_390.jpg",
        "http://gfs5.gomein.net.cn/wireless/T1QmA5BvZT1RCvBVdK_1065_390.png"
      ],
      icons: [
        {
          id: 1,
          text: "手机",
          iconimgs:
            "http://gfs8.gomein.net.cn/wireless/T1nxxmBjCT1RCvBVdK_215_150.png"
        },
        {
          id: 2,
          text: "平板电脑",
          iconimgs:
            "http://gfs5.gomein.net.cn/wireless/T1QXx4BvKT1RCvBVdK_215_150.png"
        },
        {
          id: 3,
          text: "单反相机",
          iconimgs:
            "http://gfs6.gomein.net.cn/wireless/T19aW4BCE_1RCvBVdK_215_150.png"
        },
        {
          id: 4,
          text: "耳机耳麦",
          iconimgs:
            "http://gfs8.gomein.net.cn/wireless/T1rrZmBmbv1RCvBVdK_215_150.png"
        },
        {
          id: 5,
          text: "笔记本",
          iconimgs:
            "http://gfs9.gomein.net.cn/wireless/T16xhmBC_T1RCvBVdK_215_150.png"
        },
        {
          id: 6,
          text: "台式机",
          iconimgs:
            "http://gfs7.gomein.net.cn/wireless/T1XpL5BTJv1RCvBVdK_215_150.png"
        },
        {
          id: 7,
          text: "智能家居",
          iconimgs:
            "http://gfs9.gomein.net.cn/wireless/T1dtb4B7Kg1RCvBVdK_215_150.png"
        },
        {
          id: 8,
          text: "智能音箱",
          iconimgs:
            "http://gfs7.gomein.net.cn/wireless/T1FdhmBbZT1RCvBVdK_215_150.png"
        }
      ]
    };
  },
  components: {
    Tabs
  }
};
</script> 


<style lang="stylus" scoped>
.main {
  margin: 0 10px;
  height 4176px
}

.focusPhoto {
  width: 100%;
  height: 142px;
  box-sizing: border-box;
  padding: 6px 0;

  .template {
    overflow: hidden;
    height: 130px;
    width: 355px;
    box-sizing: border-box;
    border-radius: 10px;

    img {
      width: 355px;
      height: 130px;
    }
  }
}

.Gongge {
  padding: 6px 0px;

  .van-grid {
    overflow: hidden;
    border-radius: 10px;
    margin: 11px 0px 0px;

    .van-grid-item__icon {
      width: 71px;
      height: 50px;
    }
  }
}

/deep/img {
  width: 71px;
  height: 50px;
}

.advertisement {
  height: 95px;

  img {
    width: 100%;
    height: 100%;
  }
}

.Spike {
  height: 300px;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color white 
  header {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
