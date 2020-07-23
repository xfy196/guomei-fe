<!-- 
 * @description: 品牌专区
 * @fileName: BrandZone.vue 
 * @author: 小小荧 
 * @date: 2020-07-10 20:52:56
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div class="brandZoneContainer">
    <div
      class="page-component-content template-corner1 template-border-display-1"
      style="background-color:transparent;"
    >
      <div
        class="template-margin template-corner1 template-border-display-1 GuiTempletFloorPhoto"
        style="display:block;"
      >
        <!---->
        <div class="gui-image-single-wrapper">
          <a class="singlePic">
            <img
              src="http://gfs6.gomein.net.cn/wireless/T1c0hmBXKT1RCvBVdK_750_150.jpg"
              class="img"
            />
          </a>
        </div>
      </div>
    </div>
    <!-- 下面图片展示的盒子 -->
    <div class="imgBox">
        <div class="l-imgBox">
            <router-link to="#" tag="a">

            <img src="https://gfs7.gomein.net.cn/wireless/T1zcCmBvZT1RCvBVdK_426_568.jpg" alt="">
            </router-link>
        </div>
        <div class="r-imgBox">
            <div class="t-imgBox">
                <router-link to="#" tag="a">

                <img src="https://gfs8.gomein.net.cn/wireless/T1guKmBKDv1RCvBVdK_639_284.jpg" alt="">
                </router-link>
            </div>
            <div class="b-imgBox">
                <router-link to="#" tag="a">

                <img src="https://gfs8.gomein.net.cn/wireless/T1zmbmBCVT1RCvBVdK_320_285.jpg" alt="">
                </router-link>
                <router-link to="#" tag="a"><img src="https://gfs8.gomein.net.cn/wireless/T15kVmBQ_v1RCvBVdK_320_285.jpg" alt=""></router-link>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
<style lang="stylus" scoped>
.page-component-content
    margin-left .26667rem
    margin-right .26667rem
    .template-corner1 
        border-radius 0.32rem 0.32rem 0 0
        overflow hidden
    .template-margin 
        margin-top 0.26667rem
    .singlePic 
        width 100%
        align-items center
        display block

        img 
            width 100%
            display block
.imgBox
    display flex
    margin-left: .26667rem;
    margin-right: .26667rem;
    background-color #ffffff
    border-radius: 0 0 .32rem .32rem;
    overflow: hidden;
    .l-imgBox
        img 
            width: 3.78667rem;
            height: 5.05333rem;
    .t-imgBox
        img 
            display: block;
            width: 5.68rem;
            height: 2.52667rem;
    .b-imgBox
        img
            width: 2.84rem;

</style>