<template>
  <div>
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="请您输入收货地址"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
      <template #left-icon>
        <div class="location-city" @click="goChooseCity">
          <van-icon name="location-o" />
          <span>{{ locationCity }}市</span>
        </div>
      </template>
    </van-search>
    <div class="current-position">
      <h1>当前定位</h1>
      <div class="location-now">
        <h3>定位中...</h3>
        <p>
          <van-icon name="aim" />
          <span>重新定位</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search, Icon } from 'vant';
Vue.use(Search);
Vue.use(Icon);

export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onSearch(){
      console.log('搜索功能')
    },
    goChooseCity(){
      this.$router.push('/selectCity')
    }
  },
  computed: {
    locationCity() {
      return this.$store.state.locationCity;
    }
  },
}
</script>

<style lang="stylus" scoped>
.location-city
  display flex
  margin-right 10px
.current-position
  padding 5px 15px 17px
  background-color #ffffff
  h1  
    font-weight 400
    line-height 1
    font-size 13px
    color #919599
    margin-bottom 16px
  .location-now
    display flex
    justify-content space-between
    h3
      font-size 16px
      color #262c32
      font-weight 400
    p 
      display flex
      align-items center
      font-size 13px
      color #f20c59
      span 
        margin-left 3px
</style>