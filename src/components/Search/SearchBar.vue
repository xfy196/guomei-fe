<template>
  <div>
    <form action="/">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="onSearch"
        @cancel="onCancel"
        @input="onInput"
      />
    </form>
    <ul v-if="searchValue" class="search-result" v-html="contentHTML"></ul>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);

import axios from 'axios';

export default {
  data() {
    return {
      searchValue: '',
      contentHTML: '',
    };
  },
  methods: {
    onCancel() {
      this.$router.back();
    },
    onSearch() {
      console.log("跳转至列表页");
    },
    onInput() {
      axios({
        url: '/search',
        method: 'get',
        params: {
          act: 'keywordsPromptNew',
          keystr: this.searchValue
        }
      })
        .then((res) => {
          let result = res.data.replace(/href="(.*?)"/g, 'href="javascript:void(0)"')
          this.contentHTML = result;
        })
    }
  },
}
</script>

<style lang="stylus" scoped>
/deep/.search-result
  background-color #fff
  li  
    display flex
    justify-content space-between
    height 45px
    line-height 45px
    padding 0 10px
    border-bottom 0.5px solid #e6e6e6
    &:first-of-type
      text-indent 20px
      background url('../../assets/shop-bg.svg') no-repeat 10px center
      background-size 18px auto
    a 
      font-size 14px
      color #333333
    span 
      font-size 12px
      color #999999

</style>