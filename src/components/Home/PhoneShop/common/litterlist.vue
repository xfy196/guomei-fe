<template>
   <div>
       <p>猜你喜欢</p>
              <div class="swp">
                  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
                      <van-swipe-item>
                          <ul>
                              <li v-for="(item,index) in list" :key="index">
                                  <a href="">
                                      <div class="swpimg">
                                          <img :src="item.url" alt="">
                                      </div>
                                      <p>口水娃零食1100g肉类豆干薯片 零食大礼包 国美超市甄选</p>
                                      <span>38.90</span>
                                  </a>
                              </li>
                             
                          </ul>
                      </van-swipe-item>
                  </van-swipe>
              </div>
   </div>
</template>

<script>
export default {
    data () {
        return {
            list:[
                {url:"http://gfs17.gomein.net.cn/T1bOY5B5bv1RCvBVdK_400.jpg"},
                {url:"http://gfs17.gomein.net.cn/T1cmK5Bv_v1RCvBVdK_400.jpg"},
                {url:"http://gfs17.gomein.net.cn/T1yUY5Bjhv1RCvBVdK_400.jpg"},
                {url:"http://gfs17.gomein.net.cn/T1bOY5B5bv1RCvBVdK_400.jpg"},
                {url:"http://gfs17.gomein.net.cn/T1cmK5Bv_v1RCvBVdK_400.jpg"},
                {url:"http://gfs17.gomein.net.cn/T1yUY5Bjhv1RCvBVdK_400.jpg"}
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
  .guess_like
    border-top 10px solid #F2F2F2;
    height 406px
    p
      height 35px
      font-size 13px
      padding 0 0 0 10px
      line-height 35px
    .swp
      .my-swipe .van-swipe-item 
        color: #fff;
        font-size: 20px;
        height 347px
        background-color: withe;
      .van-swipe-item
        ul
          height 347px
          display flex
          flex-wrap: wrap
          li
            width 118px
            height 173px
            padding 0 0 12px 17px
            font-size 10px
            a
              color black
              width 101px
              height 161px
              .swpimg
                width 101px
                height  101px
                margin-bottom 5px
                img 
                  width 100%
                  height 100%
              p
                width 101px
                height 25px
                padding 0
                color #919599
                font-size 12px
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                line-height 1
                overflow: hidden;
              span 
                width 101
                height 25.8px
                font-size 13px
                padding 5px 0 8px
                box-sizing border-box
                font-weight  700
</style>