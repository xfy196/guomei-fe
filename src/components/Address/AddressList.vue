<template>
  <div>
    <div class="no-address" v-if="!address">
      <img src="../../assets/noMessage.png" alt="">
      <p>您还没有收货地址</p>
    </div>
    <div class="have-address" v-else>
      <div class="address-item">
        <van-checkbox v-model="checked" checked-color="#DE345C" icon-size="0.4rem"></van-checkbox>
        <div class="info">
          <div class="contact-info">
            <p class="name">{{ address.name }}</p>
            <span class="tel">{{ address.tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') }}</span>
          </div>
          <div class="address-detail">{{ address.province }}{{ address.city }}{{ address.county }}{{ address.addressDetail }}</div>
          <div class="operate">
            <span class="edit">编辑</span>
            <span class="del" @click="delAddress">删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  data() {
    return {
      checked: true
    }
  },
  computed: {
    address(){
      return JSON.parse(window.localStorage.getItem('address'));
    }
  },
  methods: {
    delAddress() {
      window.localStorage.removeItem('address');
      window.location.reload();
    }
  },
}
</script>

<style lang="stylus" scoped>
.no-address
  margin-top 100px
  text-align center
  img 
    height 160px
  p 
    font-size 13px
    color #919599
    line-height 3
.have-address
  .address-item
    display flex
    margin 10px
    padding 10px
    border-radius 5px
    background-color #fff
    align-items center
    .info
      flex 1
      margin-left 20px
      .contact-info
        margin-top 5px
        display flex
        font-size 15px
        color #333333
        .name 
          margin-right 8px
      .address-detail
        margin-top 5px
        font-size 13px
        color #888888
      .operate
        margin-top 20px
        display flex
        justify-content flex-end
        font-size 12px
        color #333333
        span
          line-height 1
          padding 0 15px 
          &:first-child
            border-right 0.5px solid #cacccf
          &:last-child
            padding-right 8px
</style>