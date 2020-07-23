<template>
  <div class="infor-detail">
    <van-cell class="user-photo">
      <!-- 使用 title 插槽来自定义标题 -->
      <span class="custom-title">头像</span>
      <template #right-icon>
          <van-image
            round
            width="45px"
            height="45px"
            src="https://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png"
          />
      </template>
    </van-cell>
    <van-cell-group v-for="item in cellList" :key="item.title">
      <van-cell :title="item.title" :value="item.value" :is-link="item.islink" />
    </van-cell-group>
    <van-cell-group v-for="item in marginList" :key="item.title" class="margin-list">
      <van-cell :title="item.title" :value="item.value" :is-link="item.islink" />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  data() {
    return {
      cellList : [
        {
          title : '用户名',
          value : 'admin',
          islink : false
        },
        {
          title : '昵称',
          value : 'guomei_admin',
          islink : true
        },
        {
          title : '性别',
          value : '未选择',
          islink : true
        },
        {
          title : '出生年月',
          value : '未填写',
          islink : true
        },
        {
          title : '推荐码',
          value : 'XcpcZIHw',
          islink : false
        },
        {
          title : '推荐人',
          value : '无',
          islink : false
        },
      ],
      marginList : [
        {
          title : '收货管理地址',
          islink : true
        },
        {
          title : '账户安全',
          value : '安全等级:中',
          islink : true
        },
        {
          title : '收货管理地址',
          islink : true
        },
        {
          title : '账号绑定',
          islink : true
        },
        {
          title : '美店授权',
          islink : true
        },
      ]
    }
  },
}
</script>

<style lang="stylus" scoped>
.infor-detail
  .user-photo 
    .van-cell__value
      height 50px
      line-height 50px
      .custom-title
        font-size 15px
  .margin-list
    margin-top 10px
</style>