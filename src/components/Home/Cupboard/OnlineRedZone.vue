<!-- 
 * @description: 网红专区 
 * @fileName: OnlineRedZone.vue 
 * @author: 小小荧 
 * @date: 2020-07-10 21:12:03
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div>
    <div
      class="template-corner-1 template-border-display-1"
      style="background-color:transparent;"
    >
      <div
        class="template-margin template-corner-1 template-border-display-1 GuiTempletFloorPhoto"
        style="display:block;"
      >
        <!---->
        <div class="gui-image-single-wrapper">
          <router-link to="#" class="singlePic">
            <img
              src="http://gfs7.gomein.net.cn/wireless/T1wT_4BCD_1RCvBVdK_1125_132.png"
              class="img"
            />
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="page-component-content template-corner3 template-border-display-1"
      style="background-color:transparent;" 
      v-for="(item,index) in images" :key="index"
    >
      <div
        class="template-corner3 template-margin template-border-display-1 GuiTempletFloorPhoto"
        style="display:block;"
      >
        <!---->
        <div class="gui-image-single-wrapper">
          <router-link to="#" tag="a"
            class="singlePic"
            >
            <ActivityBanner :url="item"></ActivityBanner>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityBanner from "@/common/ActivityBanner"
export default {
    data(){
        return {
            images : [
                "https://gfs7.gomein.net.cn/wireless/T1ZaW4BT__1RCvBVdK_750_255.jpg",
                "https://gfs8.gomein.net.cn/wireless/T1.UEmB7Vv1RCvBVdK_1065_554.jpg",
                "https://gfs9.gomein.net.cn/wireless/T1qfVmB4Kv1RCvBVdK_1065_554.jpg",
                "https://gfs9.gomein.net.cn/wireless/T1qfVmB4Kv1RCvBVdK_1065_554.jpg",
                "https://gfs6.gomein.net.cn/wireless/T1g1EmB_VT1RCvBVdK_1065_554.jpg",
                "https://gfs9.gomein.net.cn/wireless/T1S1YmB4xT1RCvBVdK_1065_554.jpg",
                "https://gfs6.gomein.net.cn/wireless/T1MibmBmdv1RCvBVdK_1065_554.jpg"
            ]
        }
    },
    components : {
        ActivityBanner
    }
};
</script>
<style lang="stylus" scoped>
.template-margin
    margin-top .26667rem
    .gui-image-single-wrapper
        .singlePic
            width: 100%;
            align-items: center;
            display: block;
            .img
                width 100%
.page-component-content
    margin-left: .26667rem;
    margin-right: .26667rem;
.template-corner3
    border-radius: .32rem .32rem;
    overflow: hidden;
.template-margin
    margin-top .26667rem
    .singlePic
        width: 100%;
        align-items: center;
        display: block;
</style>
