<template>
  <div class="fromDContainer">
    <div class="page-component-content" style="background-color:transparent;">
      <div class="gome" style="display: block">
        <div class="gui-image-single-wrapper">
          <router-link tag="a" to="#">
            <img src="https://gfs6.gomein.net.cn/wireless/T1DNK4BTZT1RCvBVdK_1065_228.png" alt />
          </router-link>
        </div>
      </div>
    </div>
    <div
      class="page-component-content template-corner2 template-border-display-1"
      style="background-color:#fff;"
    >
      <section class="gui-templet-cupboard">
        <div class="input-item">
          <span>*</span>
          <input
            type="text"
            placeholder="请输入姓名，免费领设计效果"
            maxlength="10"
            value
          />
        </div>
        <div class="input-item">
          <span>*</span>
          <input
            type="tel"
            placeholder="请输入手机号，抢代金券"
            maxlength="11"
            data-code="cupboardTemplet-2"
            value
            
          />
        </div>
        <div class="input-item" >
          <span class="no-margin-right" ></span>
          <input
            type="text"
            placeholder="请输入您的城市"
            maxlength="20"
            value
            
          />
        </div>
        <div class="option" >
            
          <a :class="item.hoverClass" v-for="(item, index) in hoverBunton" :key="index">{{item.name}}</a>
        </div>
        <button>提交</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            hoverBunton : [
                {
                    hoverClass : "hover",
                    name : "毛坯新房"
                },
                {
                    hoverClass : "",
                    name : "老房重装"
                }
            ]
        }
    },
    methods: {
    
    }
};
</script>
<style lang="stylus" scoped>
.fromDContainer 
.template-corner2
    border-radius: 0 0 .32rem .32rem;
    overflow: hidden;
    .gui-templet-cupboard
        background: #fff;
        border-radius: 0 0 .32rem .32rem;
        padding: .66667rem .53333rem 0;
        .input-item
            width: 8.4rem;
            height: 1.09333rem;
            font-size: .37333rem;
            border: .02667rem solid #d5d5d5;
            border-radius: .10667rem;
            margin-bottom: .26667rem;
            display: flex;
            box-align: center;
            align-items: center;
            span 
                color: #f20c59;
                margin-right: .08rem;
                margin-left: .26667rem;
            input 
                width: 7.85333rem;
                height: .53333rem;
                border: none;
                outline: none;
        .option
            display: flex;
            font-size: .37333rem;
            box-align center
            align-items center
            a
                width: 4rem;
                height: 1.09333rem;
                border: 1px solid #ddd;
                color: #262c32;
                border-radius: .17333rem;
                text-align: center;
                line-height: 1.09333rem;
                display: block;
                &:first-child
                    margin-right: .4rem;
                &.hover
                    color: #124b90;
                    border-color: #124b90;
                    background: url(https://js.gomein.net.cn/ssr/statics/images/select-on.92646fb.png) no-repeat 100% 0;
                    background-size: .74667rem .70667rem;
        button 
            background: #124b90;
            border-radius: .57333rem;
            border: none;
            font-size: .42667rem;
            color: #fff;
            width: 8.4rem;
            height: 1.14667rem;
            line-height: 1.14667rem;
            text-align: center;
            margin: .66667rem auto;
            outline: none;
  .page-component-content
    margin-left: .26667rem;
    margin-right: .26667rem;

  .gome 
    border-radius: 0.32rem 0.32rem 0 0;
    overflow: hidden;
    margin-top: 0.26667rem;

    a 
      width: 100%;
      align-items: center;
      display: block;

      img 
        width: 100%;
        display: block;
      
</style>