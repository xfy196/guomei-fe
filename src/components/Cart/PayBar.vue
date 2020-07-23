<template>
  <div class="pay-bar" v-show="Object.keys(carts).length > 0 ? true : false">
    <div class="option-box">
      <van-checkbox v-show="modifyState"
        v-model="isAllCheck"
        checked-color="#DE345C"
        icon-size="19"
      ></van-checkbox>
      <van-checkbox v-show="!modifyState"
        v-model="isAllModifyChecked"
        checked-color="#DE345C"
        icon-size="19"
      ></van-checkbox>
      <label>全选</label>
    </div>
    <div class="r_pay">
      <div class="total-price-box">
        <p class="total-price" v-show="modifyState">
          合计:<strong>¥{{ !totalPrice ? "0.00" : totalPrice }}</strong>
        </p>
        <p class="lev-collect" :class="isModifyChecked ? 'default' : ''" v-show="!modifyState">移入收藏</p>
        <!---->
      </div>
      <div class="button-box">
        <a v-show="modifyState" :class="!isAllCheck && totalNum ===0  ? 'nopay' : ''" class="btn default red go-pay"
          >去结算(<strong>{{ !isAllCheck && totalNum === 0 ? 0 : totalNum }}</strong
          >)</a
        >
        <a :class="isModifyChecked ? 'red' : ''" class="deleteBtn" v-show="!modifyState" @click="handleDelete">删除</a>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { Checkbox } from "vant";
Vue.use(Checkbox);
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: "cart/totalPrice",
      totalNum: "cart/getTotalNum",
      carts: "cart/getCarts",
      modifyState: "cart/getModifyState"
    }),
    isAllCheck: {
      get() {
        return this.$store.state.cart.carts.every((item) => {
          return item.checked;
        });
      },
      set(checked) {
        this.$store.dispatch("cart/updateAllChecked", checked);
      },
    },
    isModifyChecked: {
      get(){
        return this.$store.state.cart.carts.some(item => {
          return item.modifyState
        })
      }
    },
    isAllModifyChecked: {
          get(){
        return this.$store.state.cart.carts.every(item => {
          return item.modifyState
        })
      },
      set(checked){
        this.$store.dispatch("cart/updateAllModifyChecked", checked)
      }
    }
  },
  methods: {
    handleDelete(){
      this.$store.dispatch("cart/deleteChooseCart");
    }
  },
};
</script>

<style lang="stylus" scoped>
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
      .lev-collect
        color #b3b8bd
        font-size .426667rem
        padding 0 15px
      .default
        color #262c32
      .button-box

        a
          display block
          color #ffffff
          width: 100px;
          height: 1.333333rem;
          line-height: 1.333333rem;
          font-size: .32rem;
          border-radius: 0;
          padding: 0;
          font-size 16px
          min-width 2.8rem
          text-align center
        .nopay
          background: #d7d8d9;
          color #ffffff
        .deleteBtn
          background: #d7d8d9;
        .red
          background: linear-gradient(90deg,#fa1e8c,#fc1e56);
</style>
