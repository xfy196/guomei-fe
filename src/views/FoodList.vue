<template>
<van-nav-bar title="标题" left-text="返回" left-arrow>
  <template #right>
   <van-icon name="ellipsis" size="35" color="black"/>
  </template>
  <template #left>
    <van-icon name="arrow-left" size="18" color="#3d3d3d" />
  </template>
  <template #title>
    <van-tabs>
      <van-tab v-for="index in 3" :key="index">
        <template #title> 商品 </template>
        内容
      </van-tab>
    </van-tabs>
  </template>
</van-nav-bar>
</template>

<script>

import Vue from 'vue';
import { NavBar,Icon, Tab, Tabs  } from 'vant';
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);

export default {

}
</script>

<style lang="stylus" scoped>
.app
  position relative
.van-nav-bar
  border-bottom: 1px solid #ddd;
  /deep/.van-tabs__wrap
    width 172.6px
    height 50px
    margin-top 20px
    font-weight normal
    .van-tab__text
      font-size 14px
      color black

</style>