<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div>
    <Swipe></Swipe>
    <GridShortCut></GridShortCut>
    <ActivityBanner :url="a_url"></ActivityBanner>
    <BestSellers></BestSellers>
    <HotSellers></HotSellers>
    <HotSellers></HotSellers>
    <ProductVideo></ProductVideo>
    <FromDesign></FromDesign>
  </div>
</van-pull-refresh>
</template>

<script>
import GridShortCut from "@/Home/Cupboard/GridShortCut";
import ActivityBanner from "@/common/ActivityBanner";
import BestSellers from "@/Home/Cupboard/BestSellers";
import Swipe from "@/common/Swipe";
import HotSellers from "@/Home/Cupboard/HotSellers";
import ProductVideo from "@/Home/Cupboard/ProductVideo";
import FromDesign  from "@/Home/Cupboard/FromDesign ";
import Vue from "vue";
import {PullRefresh } from "vant"
Vue.use(PullRefresh)
export default {
  data(){
    return {
      a_url : "https://gfs9.gomein.net.cn/wireless/T14VD5B5Dv1RCvBVdK_750_200.png",
      isLoading : false
    }
  },
  components: {
    GridShortCut,
    Swipe,
    ActivityBanner,
    BestSellers,
    HotSellers,
    ProductVideo,
    FromDesign 
  },
  methods: {
    onRefresh(){
      setTimeout(() => {
        
        this.isLoading = false
      }, 500)
    }
  }
};
</script>