<template>
  <div>
    <Swipe></Swipe>
    <GridShortCut></GridShortCut>
    <ActivityBanner :url="a_url"></ActivityBanner>
  </div>
</template>

<script>
import GridShortCut from "@/Home/Cupboard/GridShortCut";
import ActivityBanner from "@/common/ActivityBanner";
import Swipe from "@/common/Swipe";
export default {
  data(){
    return {
      a_url : "https://gfs9.gomein.net.cn/wireless/T14VD5B5Dv1RCvBVdK_750_200.png",

    }
  },
  components: {
    GridShortCut,
    Swipe,
    ActivityBanner
  }
};
</script>