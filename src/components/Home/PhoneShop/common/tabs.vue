<template>
  <div>
      <ul>
          <li>
              <p>16:00</p>
              <span>07月09日</span>
          </li>
          <li>
              <p>16:00</p>
              <span>07月09日</span>
          </li>
      </ul>
      <div class="goods-multiple-wrapper">
          <div class="goods-item">
             <div class="wrap"><img src="http://gfs17.gomein.net.cn/T1PnZ4BsbT1RCvBVdK_400.jpg" alt=""></div>
            <div class="desc-prices">
                  <p>vivo S6 5G全网通 8+128G 多瑙河 手机 点亮夜色点亮你</p>
                  <p class="price-original"></p>
                  <p class="desc">
                      <span>
                          <small>¥</small>
                          2398
                      </span>
                  </p>
             </div>
          </div>

      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
    
export default {
    data () {
        return {
            coming:{}
        }
    },
    mounted(){
        axios({
            url:'http://localhost:9000/telephone'
        })
        .then((data)=>{
            this.coming=data.data.goodsList.slice(0,3);
        })
        
    }


}
</script>

<style lang="stylus" scoped>
ul
 height 51px
 display flex
 li
  flex 1
  display flex
  flex-direction column
  justify-content center
  align-items center
  p
   text-align center
   font-size 17px 
   color black
  span 
   font-size 11px
   color #262c32
   text-align center
  active
   color #f20c59
.goods-multiple-wrapper
 height 200px
 margin 5px 0px 8px
 .goods-item
  width 106px
  height 187px
  box-sizing border-box
  margin 0px 4px 0px 10px
  padding 4px 4px 5.5px
  .wrap
   width 98px
   height 98px
   img
    width 98px
    height 98px
  .desc-prices
   width 98px
   height 72px
   p
    width 98px
    height 30px
    font-size 12px
</style>