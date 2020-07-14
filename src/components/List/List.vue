<template>
  <div>
    <van-dropdown-menu active-color="red">
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
    <div class="phnav">
      <ul>
        <li class="phnav_1">国美经营</li>
        <li class="phnav_2">团购商品</li>
        <li class="phnav_3">屏幕尺寸</li>
        <li class="phnav_4">机身内存</li>
      </ul>
    </div>
    <!-- 商品 -->
    <div>
      <div class="good_list"> 
        <div class="good_item" v-for="item in list" :key="item.c3id">
          <span class="gd_img">
            <img :src="item.productImgURL" alt />
          </span>
          <div class="gd_img2">
            <h3 class="title">
              <em class="pic_l"></em>
              {{item.goodsName}}</h3>
            <div class="troud">
              <p class="flex_bd">
               <i class="phnc">128GGG</i>
                <span>机身内存</span>
              </p>
              <p class="flex_bd">
                <i>128GGG</i>
                <span>运行内存</span>
              </p>
              <p class="flex_bd">
                <i>128GGG</i>
                <span>屏幕尺寸</span>
              </p>
            </div>
            <div class="price">
              <div class="pricenum">￥{{item.price}}</div>
            </div>
            <span class="fenqi">易卡分期</span>
           
              <a href class="z_dis">{{item.skuNo}}人评论</a>
              <span class="adds">北京国美公主坟店</span>
           
            <a href class="check">
              <em class="showadds">该商品多家店铺在售</em>
              <i class="showadds2">查看</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios'
import { DropdownMenu, DropdownItem } from "vant";
import { Tab, Tabs } from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "3",
      value4: "4",
      option1: [
        { text: "综合", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [{ text: "销量", value: "3" }],
      option4: [{ text: "筛选", value: "4" }],

      active: 2,
      list:[]
    };
  },
  created(){
     axios({
        url: '/api/telephone'
      }).then((result) => {
        this.list=result.data.goodsList
      })
  }
};
</script>

<style lang="stylus">




.phnav {
  padding: 0 0.2rem;
  border-bottom: 1px solid #f3f5f7;
  margin-bottom: 0.2rem;
  height: 93px;
  background: #ffffff;
  overflow: hidden;
}
.phnav li {
  width: 166px;
  float: left;
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  box-pack: center;
  justify-content: center;
  -webkit-justify-content: center;
  width: 24%;
  height: 0.52rem;
  line-height: 0.52rem;
  text-align: center;
  background: #f3f5f7;
  color: #999;
  margin: 0.2rem 1% 0.2rem 0;
  border-radius: 0.04rem;
  padding: 0 0.04rem;
  box-sizing: border-box;
  font-size: 14px;
}
.good_list{
  width: 375px;
  height: 187px;
}
.good_item{
  width: 375px;
  height: 187px;
  background: #ffffff;
}
.gd_img{
        position: relative;
    float: left;
    margin-top: 5px
    margin-right: 11px;
    background-color: #fff;
    width: 125px
    height: 125px
}
.gd_img img{
  width: 100%;
  
  height 100%
}
.pic_l{
      margin-right: 2px!important;
    vertical-align: -1px;
        width: 11px;
   
}
.gd_img2{
  float left
  width 239px
  height 195px
}
.good_list .title{
    line-height:18px;
    font-size: 14px;
    font-weight: 500;
    word-break: break-all;
    white-space: normal;
    word-wrap: break-word;
    margin: 1px 1px 0 0;
    margin-right: 4px!important;
    vertical-align: -.2px;
}
    
.troud{
    margin-top: 11px;
    white-space: nowrap;
    overflow: hidden;
    width: 225px;
    height 27px
    }
.troud p {
    position: relative;
    display: inline-block;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
    overflow: hidden;
    width: auto;
    line-height: 1
    width 73px
    height 27px
    float left
}
.troud p span{
 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    white-space: normal;
    word-break: break-all;
}
.troud .flex_bd  i  {
    font-size: 12px;
    color: #262C32;
    height: 14px;
    line-height:14px;
    display  block
    width 68px
   
}
    
.troud .flex_bd span {
    margin-top: 3px;
    font-size: 9px;
    color: #919599;
    height: 10px;
    line-height: 10px;
      display  block
     
    }
.pricenum{
   
    margin-right: 2px;
    vertical-align: middle;
    font-size: 18px;
    color: #F20C59;
    height 34px
    
}
.fenqi{
        display: inline-block;
    box-sizing: border-box;
    margin-right: 3px;
    padding: 1px 1px 0 1px;
    border: 1px solid #F20C59;
    border-radius: 1px;
    font-size: 9px;
    color: #F20C59;
    vertical-align: 1.5px;

}
 

.z_dis{
  padding-bottom: 3px;
    line-height: 1px;
    font-size 1px
    display  block
    color #929292;
}
.adds{
      font-family: PingFangSC-Regular,sans-serif;
    font-size: 1px;
    color: #929292;
   
    height 16px
  display block;
  margin-top 5px
}
.check{
  width 239px
  height 16px
  font-size 12px 
  display block
}
.showadds{
    font-family: PingFangSC-Regular,sans-serif;
    font-size: 1px;
    color: #929292;
    line-height: 16px;
    height 13px
}
.showadds2{
     color: #262C32;
    margin-left: 5px;
    padding-right: 8px;
    background: url('https://css.gomein.net.cn/plus/style/shop_search_list/images/list-more.4fea6581fb.png') 100% 50% no-repeat;
    background-size: 8px 8px;
    font-size: 1px;
    height 13px
}
</style>