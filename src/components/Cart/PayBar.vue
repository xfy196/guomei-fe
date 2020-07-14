<template>
  <div class="pay-bar" v-show="totalNum > 0  ? true : false">
    <div class="option-box">
      <van-checkbox
        v-model="isAllCheck"
        checked-color="#DE345C"
        icon-size="19"
      ></van-checkbox>
      <label>全选</label>
    </div>
    <div class="r_pay">
      <div class="total-price-box">
        <p class="total-price">合计:<strong>¥{{totalPrice===0 ? totalPrice+".00" : totalPrice}}</strong></p>
        <!---->
      </div>
      <div class="button-box">
        <a :class="!isAllCheck ? 'nopay' : ''" class="btn default red go-pay"
          >去结算(<strong>{{totalNum}}</strong>)</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {mapGetters} from "vuex"
import { Checkbox } from "vant";
Vue.use(Checkbox);
export default {
  data() {
    return {
      checked: false,
      isAllCheck : true
    };
  },
  computed:{
    ...mapGetters({
        totalPrice: "cart/totalPrice",
        totalNum : "cart/getTotalNum"
    }),
  },
  mounted(){
    console.log(this.totalNum)
  }
};
</script>

<style lang="stylus">
.pay-bar
    position relative
    bottom 0
    left 0
    z-index 99
    height 50px
    display flex
    justify-content space-between
    align-items center
    padding-left 10px
    background-color #ffffff
    .option-box
        display flex
        label
            margin-left: .1rem;
            color: #666;
            font-size .426667rem
    .r_pay
      display flex
      font-size 14px
      align-items center
      .total-price
        color #333
        strong 
          color #f20c59
          font-size 18px
          margin 0 8px 4px
      .button-box
      
        a
          display block
          color #ffffff
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: .32rem;
          border-radius: 0;
          padding: 0;
          font-size 18px
          background: linear-gradient(90deg,#fa1e8c,#fc1e56);
          min-width 1.8rem
          text-align center
        .nopay
          background: #d7d8d9;
          color #ffffff

</style>
