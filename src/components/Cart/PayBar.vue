<template>
    <div class="pay-bar">
      <div class="option-box">
         <van-checkbox
              v-model="checked"
              checked-color="#DE345C"
              icon-size="19"
            ></van-checkbox> <label>全选</label>
      </div>
      <div class="total-price-box">
        <p class="total-price">合计:<strong>¥0.00</strong></p>
        <!---->
      </div>
      <div class="button-box">
        <a class="btn default red go-pay no-gopay"
          >去结算(<strong>0</strong>)</a
        >
      </div>
    </div>
</template>

<script>
import Vue from "vue"
import {Checkbox} from "vant"
Vue.use(Checkbox);
export default {
    data(){
        return {
            checked : false
        }
    }
};
</script>

<style lang="stylus">
.pay-bar
    position relative
    bottom 0
    left 0
    z-index 99
    height 44px
    display flex
    .option-box
        display flex
        label 
            margin-left: .1rem;
            color: #666;
</style>