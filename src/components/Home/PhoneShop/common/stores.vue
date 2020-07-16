<template>
  <div>
      <!-- 头部 -->
      <div class="top-search-area">
          <section class="top-search">
            <a href="">
                  <span><van-icon name="search" /></span>
                <input type="text" placeholder="搜索商品">
            </a>

          </section>
      </div>
      <div class="shop-banner-mask">
      </div>
        <!-- 图片 -->
      <div class="gui-store-recommend">
          <div class="shop-position">
              <ul>
                <li class="c1"><van-icon name="location" /></li>
                <li class="c2">北京大中团结湖店</li>
                <span><van-icon name="arrow-down" /></span>
              </ul>
              <p>门店信息<span><van-icon name="arrow" /></span></p>
          </div>
            <div class="shopowner-info">
                <dt>
                </dt>
                <dd>

                </dd>
            </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {

}
</script>

<style lang="stylus" scoped>
.top-search-area
    position relative
    height 250px
    background-image url("http://gfs15.gomein.net.cn/T1lOV4B_dT1RCvBVdK.jpg") 
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100%;
    background-origin: content-box;
    background-clip: content-box;
    .top-search
        position absolute
        top 0
        z-index 2
        box-sizing border-box
        height 44px
        padding 7px 15px 7px 10px
        left: calc(50% - 165px);
        a   
            text-align center
            width 312px
            display inline-block
            height 30px
            background-color white 
            border-radius 20px
            line-height 22px
            input 
                color  #919599
                width 268px
                height 25px
                padding 2px 4px
                box-sizing border-box
                border none
                line-height 25px
                font-size 14px
                outline: none;
            span 
                display inline-block
                height 14px
                line-height 16px
                .van-icon-search
                    color #B9B9B9
                    font-size 14px                                                          
.shop-banner-mask
    background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.55));
    height 250px
    position absolute
    top 0
    width 100%
.gui-store-recommend
    height 186px
    width 355px
    margin -54px 10px 0 10px
    background-color white
    position relative
    z-index 10
    border-radius 10px
    .shop-position
        height 50px
        padding 18px 11px 8px 12px 
        box-sizing border-box
        font-size 24px
        display flex
        justify-content space-between
        ul
            display flex
            .c1
                font-size 24px
                color red
            .c2
                font-size 20px
                font-weight 600
            span 
                font-size 15px
                margin 2px 0 0 5px
        p
            font-size 13px
            color #919599
            span 
                font-size 13px
                margin-left 5px


</style>