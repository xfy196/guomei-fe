<template>
  <div>
    <van-index-bar :index-list="indexList">
      <div v-for="(items, letter) in originData" :key="letter">
        <van-index-anchor :index="letter" />
        <van-cell v-for="item in items" :key="item.id" :title="item.name" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor, Cell } from 'vant';

Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell);

import axios from 'axios';

export default {
  data() {
    return {
      indexList: [],
      originData: {}
    };
  },
  mounted(){
    axios({
      url: '/api/cities'
    })
    .then((res) => {
      this.indexList = Object.keys(res.data.cities);
      this.originData = res.data.cities;
      console.log(this.originData);
    })
  }
}
</script>

<style lang="stylus" scoped>
.city
  font-size 14px
  background-color #fff
  padding-left 15px
  padding-top 10px
  padding-bottom 10px
</style>