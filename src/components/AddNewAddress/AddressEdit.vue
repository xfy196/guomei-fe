<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      columns-placeholder="['请选择', '请选择', '请选择']"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';
Vue.use(AddressEdit);

import axios from 'axios';

export default {
  data() {
    return {
      areaList: {}
    };
  },
  methods: {
    onSave(value) {
      window.localStorage.setItem('address', JSON.stringify(value));
      this.$router.push('/address');
    },
  },
  created() {
    axios({
      url: '/api/area'
    })
    .then((res) => {
      this.areaList = res.data;
    })
  },
}
</script>

<style lang="stylus" scoped>

</style>