<!-- 
 * @description: 精选商品
 * @fileName: BestSellers.vue 
 * @author: 小小荧 
 * @date: 2020-07-09 19:46:21
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div class="multiple-goods-wrapper">
    <header
      class="template-header"
      style="background: url('http://gfs9.gomein.net.cn/wireless/T13gK4B5KT1RCvBVdK_1065_150.jpg') left center / auto 100% no-repeat;"
    ></header>
    <section class="goods-container">
      <div class="goods-multiple-wrapper no-scrollbar">
        <div class="goods-item" v-for="(item) in lists" :key="item.id">
          <router-link class="g-href" tag="a" to="#">
            <img v-lazy="item.img" :src="item.img" :alt="item.title" />
          </router-link>
          <div class="desc-prices">
						<p class="desc"><router-link to="#" tag="a">{{item.title}}</router-link></p>
						<p class="price-original"><b>¥</b>{{item.oPrice}}</p>
						<p class="price-cart"><span><b>¥</b>{{item.cPrice}}<small></small></span> <span class="goods-cart cart-abled"></span></p>
					</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  lazyComponent: true
});
export default {
  data() {
    return {
      lists: [
        {
					id:1,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
        {
					id: 2,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
        {
					id: 3,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
        {
					id:4,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
				{
									id:5,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
                {
									id:6,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
                {
									id:7,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        },
                {
									id:8,
          title: "德国康巴赫中华老铁锅无涂层炒菜锅电磁炉燃气通用30cm",
          img: "https://gfs17.gomein.net.cn/T1k7ZmBXLv1RCvBVdK_260.jpg",
          oPrice: 155,
          cPrice: 95
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.multiple-goods-wrapper
  border-radius 0.32rem 0.32rem 0 0
  margin-left 0.26667rem
  margin-right 0.26667rem
  overflow hidden
  margin-top 0.26667rem
	.goods-container 
		padding 0 0 0.21333rem
		background-color #ffffff
		.goods-multiple-wrapper
			display flex
			overflow-x scroll
			padding-top .13333rem
			.goods-item
				background-color #fff
				border-radius .21333rem
				padding .10667rem .10667rem .14667rem
				margin-right .10667rem
				.desc-prices
					margin-top .21333rem
					.desc
						a
							font-size .32rem
							color #262c32
							letter-spacing .06667rem
							line-height .4rem
							padding 0 .10667rem
							overflow hidden
							text-overflow ellipsis
							display -webkit-box
							-webkit-box-orient vertical
							line-clamp 2
							-webkit-line-clamp 2
							word-break break-all
							-ms-word-break break-all
							word-wrap break-word
							height .8rem
					.price-original
						font-size .29333rem
						color #b3b8bd
						text-decoration line-through
						padding 0 .10667rem
						margin-top .08rem
						height .46667rem
						line-height .46667rem
					.goods-cart
						display inline-block
						width .53333rem
						height .53333rem
						background-repeat no-repeat
						background-position 50%
						background-size 100%
						background-origin content-box
						background-clip content-box
					.price-cart
						font-size .37333rem
						color #f20c59
						line-height .53333rem
						display -webkit-box
						display -ms-flexbox
						display -webkit-flex
						display flex
						-webkit-box-pack justify
						-ms-flex-pack justify
						-webkit-justify-content space-between
						justify-content space-between
						-webkit-box-align center
						-ms-flex-align center
						-webkit-align-items center
						align-items center
						padding 0 .10667rem
						font-weight 700
						b
							font-size .26667rem
							margin-right .02667rem
						small
							font-size .32rem
						.cart-abled
							background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAApVBMVEUAAADzDFryDVnzDFnyDVnzDFnzDFnzDFrzDFr0DVnzDFr4D1/zF13/FWr/////HHHyDVryDFn////5nbz3bZv6rMb2XpH95u7zJGryE17++Pr4h63zLXD7utD3eqTzH2b81uP6ssr5kLP3cp72ZJX1SYP0NXbyGWL93uj7w9b6ob/5lrf2WY71UYn0PHr+8PX+7/T+7vP96vH8z974f6f0Qn7zJmuwKWkZAAAAEXRSTlMAgPPo2dO/qqVyUiMWDAEJ8t4esNoAAAF3SURBVDjLndXZdoIwEAbggEpBtPX/XUBw361L977/o/XYEzJJi+XU7yoXczJkMhmUK47CoO779SCMYnVVy2vA0vBapWFtz8cPvtf+HdesoUStqVz3Hq7w7u24hztcdfdg7SdxZZGy5yXvME3T4ZXs5hyXuITk0xSl9Ina3+cdJ0nGNUrV2jqx1ucAfyRvmTp32UM5v2VviAXfAeR9y8TaUu53wgUwpWOr712pGEaPjwDOA2NFQotVJIFHzuH4ZFIsIxXCWHMPx5lvxTJUAYwNZ3CcOC6WgarDSCWTfLRWVz6MITM4cuamkqoDkdFtiy6XxbJjp0bCFLY5j5I6gJhxA1vCkRwmhNi77TPhDlKeyEl16BmTMXmCFDx2Pt7xsoIR202B0aErFiur3xtFm1XxdOMW3DJu7cZ1thxkr1KfdCfl9orHpY3J3LpoztzHpZrQlsw+5GTPzO3n6iQfTe1PHEnif42U6iF1w9irHqTVo/nmYV/9+/gCrIpYvLxOsp4AAAAASUVORK5CYII=")
			a
				width 2.61333rem
				height 2.61333rem
				display block
				margin 0 auto
				position relative
				color #333
	.template-header
		font-size: 0.48rem
		color: #262c32
		height: 1.33333rem
		line-height: 1.33333rem


.g-href
	width 2.61333rem
	height 2.61333rem
	display block
	margin 0 auto
	position relative
	color #333
	img
		width 100%
		height 100%
</style>