<!-- 
 * @description: 购物车列表
 * @fileName: CartList.vue 
 * @author: 小小荧 秦松
 * @date: 2020-07-12 20:26:27
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div class="cart_box">
    <div
      v-show="Object.keys(this.carts).length > 0 ? true : false"
      id="cart-list"
    >
      <div class="groupList" v-for="(val, key, index) in carts" :key="index + Math.random()">
        <div class="shop-info">
          <van-checkbox
            v-model="val.allChecked"
            checked-color="#DE345C"
            icon-size="19"
            @click="handleAllChecked(key)"
          >
            <div class="shop-name">
              <img :src="val[0].shopLogoUrl" alt="" />
              <p>{{ key }}</p>
            </div>
          </van-checkbox>
        </div>
        <div class="goods-list">
          <div class="goods-item" v-for="good in val" :key="good.productId">
            <div class="item-top">
              <div class="box">
                <van-checkbox
                  v-model="good.checked"
                  checked-color="#DE345C"
                  icon-size="19"
                  @click="handleCheck(good.productId)"
                ></van-checkbox>
              </div>
              <div class="goods-info">
                <p class="photo">
                  <img :src="good.productImgURL" alt="" />
                </p>
                <div class="goods-detail">
                  <div class="title">
                    <span>{{ good.type === 0 ? "国美自营" : "私营" }}</span
                    >{{ good.goodsName }}
                  </div>
                  <div class="price-calculate">
                    <div class="price">
                      ￥<span>{{good.price}}</span>
                    </div>
                    <van-stepper
                      v-model="good.totalNum"
                      integer
                      button-size="0.5rem"
                      min="1"
                      :name="good.productId"
                      @change="hanldeNumChange"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="operate">
              <ul>
                <li>移入收藏</li>
                <li>删除</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  v-show="Object.keys(this.carts).length === 0 ? true : false" class="cart-null-box">
      <div class="null-icon">
        <div
          init-width="170"
          init-height="170"
          class="gome-ui-img-container middle"
        >
          <img
            src="http://app.gomein.net.cn/plus/images/shop_cart/bj_baobei.png"
            style="opacity: 1; background-color: rgb(255, 255, 255); transition: opacity 0.3s ease 0s;"
          />
        </div>
      </div>
      <p class="desc">购物车还是空的，快去挑选商品吧</p>
      <a class="btn default middle">先逛逛</a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup, Stepper, Divider } from "vant";
import { mapGetters, mapState } from "vuex";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Stepper);
Vue.use(Divider);

export default {
  data() {
    return {
      count: 1,
      allChecked: true,
      cartData: [
        {
          name: "丹麦蓝罐曲奇饼干908g 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T1EoJ5BCAT1RCvBVdK_250.jpg?v=2",
          price: 109.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
        {
          name: "希诺大功率电子驱鼠器802 国美超市甄选",
          imgUrl: "http://gfs17.gomein.net.cn/T14ed5ByJT1RCvBVdK_250.jpg?v=2",
          price: 451.9,
          count: 1,
          shopName: "北京大中小营店",
          checked: false,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      carts: "cart/getCarts"
    }),
  },
  methods:{
    hanldeNumChange(value, detail){
      // 拿到修改后的数值之后呢我们去重新dispatch购物车的重新计算数据
        this.$store.dispatch("cart/updateCartNum", {num : value, id : detail.name}).then(() => {
      })
    },
    handleCheck(id){
      this.$store.dispatch("cart/updateCheck",id);
    },
    handleAllChecked(name){
      this.$store.dispatch("cart/updateGroupAllChecked", name);
    }
  }
};
</script>

<style lang="stylus" scoped>
#cart-list
  padding 0 10px 10px
  height 100%
  .shop-info
    padding-left 10px
    height 1.066667rem
    display flex
    align-items center
    .shop-name
      display flex
      align-items center
      img
        height 17px
      p
        font-size 14px
        color #333333
        font-weight 600
  .goods-list

    .goods-item
      display flex
      align-items center
      margin-bottom 3px
      background-color #fff
      border-radius 15px
      flex-direction column
      .box
        width 30px
        padding-left 10px
      .goods-info
        padding 10px 10px 0
        display flex
        .photo
          margin-right 10px
          width 90px
          height 90px
          img
            width 100%
        .goods-detail
          .title
            font-size 13px
            color #333333
            span
              color #ffffff
              font-size 12px
              transform scale(0.8)
              background-color #f20c59
              padding 0px 4px
              border-radius 4px
              margin-right 4px
          .price-calculate
            display flex
            justify-content space-between
            padding-right 10px
            margin 20px 0
            .price
              font-size 12px
              color #f20c59
              span
                font-size 16px
.operate
  display flex
  width 100%
  justify-content flex-end
  ul
    display flex
    margin-bottom 15px
    li
      line-height 1
      font-size 12px
      color #919599
      padding 0 15px
      &:first-of-type{
        border-right 0.5px solid #919599
      }
.item-top
  display flex
  align-items center


.cart-null-box
  padding: 1.333333rem 0 1.066667rem;
  text-align: center;
  .null-icon
    width: 4.533333rem;
    margin: 0 auto .133333rem;
    .gome-ui-img-container
      background-color: #f0f0f0;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAYAAADhu0ooAAAAAXNSR0IArs4c6QAACCBJREFUaAXtmntollUYwHe/5WXq3Fa7FsuCtLSMhWFS/tONlJVmYaFdLFiQYRiCBuYfYYiSKN2pkMJmWEhaWZCWlJZ2IQkKMd09t7mr0937Pes747zvOWff+21fzeA7cPac89yfc3nOOe+3uLhYiY1AbARiI3ARjEB8OB+am5sz29raHoZv/sDAwMz4+PgpwEvCyel0ZM4j82JxcfEGHW9r19TUzOrt7V0E/23IFQCz4EvRecEP0D8LrYH2Edr7CgsLd9Pu1fn0tjNQlMRXVVWtBG6gRhSYbkC1xQmcSQP2KZwO6+rqpnZ1db0KrkzHB22j9wS1HBv7bTIJNqQEWVlZuaO/v39zNIIM2fjKFWRtbW1Rd3f3YfhGFKTox88S6j78Xh6y5wHWGT116tRauFzLrBvaezj9S0JCQiXKOz0a7Z3OgoKCw8j0+MnIJ50+ffoQ+FI/jX4LMhXAY9hqhLeXOgHcNOBC6gyLTDe8NzOzR3WaEShBXoqiEyjJ0BlD7U+TkpJW5OfnV1toI0IxA8tYOW9bhH9PT0+fl5OT85eFJjMoq05W3Eo/Hf+/LioqmqfjjaXLaDxoCxLhkwiXRTNIcQRb5bpDqo29da4ghQf6AAOxDtioZBRE5y0MwnTVF2gECtMdOoPW3orSC1p/1E3J6Ci53q8IO2dZeh/68f5+dnZ2B7j3/XjpE8d8HW8LtERnUO3ExMSDqh0tyLF1DQ4ZPqBfMqgcIWEL8n/YmJD37F/DCAzZNsGUlJR6G340OGxNcci3O/AGGh1WXva9R3eSX5IRSvfjpJ+cnGxdtvAnsx8kQ8+mGslNZCmSmbeyx78Y7IX+IJum97W28+DXeAab5JTevj7r0ezRbQTqVxSuz6ViKQ4/F44P+lz4JjMD/QF4o85iLN0RWGgKKDOxsbFx1DesgLYMtlHPKNlxDwf+YjTfQGXC4hPYH88alsYYYQu0FZ8m+v3q7OwcD67Fj5c+e28XQKqk9UQCDxQo+6vdtr/QkSq6ghQXrz9JGUsXhgabARwqtuEtOFdCMliZ+TMG8h/EZAfehp5kQxKHR7cRKEI/2QQZuTtt+NHgWPa/Im9kc5y8sr6+PtB+xq9ZNh/A/6DjbYHu1RlUG8FynlLFqh8NSEDd1C/9urCVzpOt3I/393n1FMIr+cFfesB7nmtGoIzyBxiv8kvSH4/xA5yZS1BiyFn4A6G4cW22MWJjDUfX7Taa4PDjMp5279D0PMqFhv87eeTXSVsV635CyT0Y+sgVEIr+RMFxoPFMQyYL2nJlQIMtJC05R42rHS+mt+B7ROMdasJ/gs4xoHqmjad9FbhSbNmSaX1aWtp1ubm5nj1qDVSskDlXALY7lAlLpEVG+QGbEDOXTrKTy/lCGz0ojgGow9+7sfOjX8a5BBn91xGcQz3kF4q0j46TPKmMd6PSw6P8PPbupf8UNeI7NfrlDvg2cLYtSLHjnFEhqsJSns5IybNHMlwkH8fkC8Hh1NTU7Sylc0rfcBA7qdibC4/Yy6dOBefZh+iU5S8fx87Q/h64378nocdKbARiI/A/GgEjGZHqS7mDriWGjFAc57l8byMzfhY0rurq6ls5Lp6Bf/AaR7K4wMXgJXQcDKcD+3nYl+umfGYpINmIjuRwchq9HVsb+Yj3nYYzsy6Ht1wGinUm2l185rwJ4Z99eKPLtezqnp6eozg5GKTG0MARkovj1oe3XC+5eW2BvgBZYwI0PWGb6KjCVqHOaDtHi3WGUDuVGdrV0NAgTzVnkYOfICssQYrMVNfDG7lruc4dg0c+So8qSDGEjg6BerFdoXT6UBvhEt6kb4K4fwjpazAY20DN8KGH7crgsFT3ot/6NGN25Lut3HRaqZ3wWT8QKSPwt7PVtqu+goEDFQGMLOYwP8DF/xWlQEGujA9Bt95XFY8NMjhyG5KLgafgMOoGVmPrZdrGTxke5gAd29IdVozR3yI/7elMsi/pG8HrPK42QSxx0N7gtrMpGkGK/ogDRSaV3y8rmpqaJogCgsxgX+5i9P3JR8jDFpatLNeZNib0vWbDjxQ3kkBlCZd0dHTIfo0jiWyjP30kDrA6LkfW5sMFsmbYDB+JTZsRl7znDMTBRezLj2Fe7hPw8Ploni7L0vM1XRHBN1Gtx5DiiRQGTkYcwo+TOL7BQI4yQrALVFsgzjXz08UyzkM5i8MW5I2vjSGhDM7zTWEVaAzYbkOf7GvPlwXFEjjQcePGNbS2tj6K4CdK2AKf5DlWzUxbSFZUvA2Lw5PAr7LRXDhkZKDvgl5q44lk6cYxWvLhzJpdMbKDfVVhM/Jf4Qg212Ur8IwqBSzhVSQROdfkd02ZEXkEH8/IyFgNjFbpQtFvESpr45q63iUTcaDy2QNlT7sUgpfAAxVuMB3sextvPatHBjJqJaKlG9Cqdd85ZJsceNmjUS3/RqCBHWRGax3ME0hoVzhoI0KPaaB5eXlVJDHXUbRoRBE5hMY00JBP1uOKDLqGB8SNDr8jRkecjCK2EEaA5buRLP4Ygfn/pWAiuG+5OOxh1o+gZvCZBr81eykz6GrnxfM5MvKPX0NlzAMli9ewH5/AsXcJzJPI6It/ZcAy5bEjSyvyIETfPhpyeRgqxtLFYOcQNdQA15+ZmWn8vOfnC/VlxA1edPRlZWXJ+WgULho7mKn74HElJ0MmDGKOn24LVP4b65xipC3n5gtAw3nFo0P45Bx9Hjg0YKKDWVkP9CwnXY6Z3c0X/WngllJ3wiu/nbZQI310tyOzjhorsRGIjUBsBC6+EfgbLyRHOdJeFkgAAAAASUVORK5CYII=')
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: auto
      img 
        background: #f3f5f7!important;
        width 100%
  .desc
    color: #999;
    text-align: center;
    font-size: .373333rem;
    margin-bottom: .533333rem;
  .btn
    font-size: .373333rem;
    line-height: .986667rem;
    min-width: 2.4rem;
    padding: 0 .4rem;
    background: linear-gradient(90deg,#fa1e8c,#fc1e56)
    color #ffffff
</style>
