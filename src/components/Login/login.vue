<template>
  <div class="login-q">
         <div class="content">
             <!-- logo -->
             <div class="mxlogo">
                 <img src="//gfs10.gomein.net.cn/wireless/T1XqAyBXb_1RCvBVdK_660_360.png" alt="">
            </div>
            <!-- 登陆注册 -->
            <div class="login-style">
          <!-- 短信 -->
             <div class="count-login">
                 <div class="user">
                <div class="phnumber">
                    <input type="text" name="" id="" placeholder="请输入手机号">
                    <span class="botline"></span>
                </div>
                </div>
                <div class="code-p">
                    <div class="codenumber">
                        <input type="text" name="" id="" placeholder="请输入验证码">
                    </div>
                    <div class="titlenumber"></div>
                      <span class="botline"></span>
                </div>
                <div class="ruler">
                    <div>
                        <input type="checkbox" class="checkbox">
                    </div>
              
                    <div class="ruler-text">
                        <span>未注册手机我已经同意阅读手册</span>
                        <a href="">《国美平台协议》</a>
                        <a href="">《国美平台隐私协议》</a>
                        <a href="">《美付宝协议》</a>
                    </div>
                </div>
                <div class="btn">
                          <a href="">登录</a>
                </div>
                  <div class="choose">
                      <a href="">账号密码登录</a>
                      <a href="">新用户注册</a>
                  </div>
            </div>
 
        
            </div>
         </div>
            <div class="bottom">
            <p>其他登陆方式请关注隐私协议</p>
            <div class="bottom-pic">
                <a href="">
                    <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt="">
                    </a>
                <a href="">
                    <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt="">
                    </a>
                <a href="">
                    <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt="">
                    </a>
                <a href="">
                    <img src="https://misc.gomein.net.cn/plus/images/u/login_new/QQ.png" alt="">
                    </a>
            </div>
            </div>
 
  </div>
</template>

<script>
import Vue from "vue";
export default {

}


</script>
   
<style lang="stylus" scoped>



.login-q{
    height: 100%;
    background-color: #fff;
}
.content{
   margin-top: .1rem;
    padding: 0 .6rem;
 
}
.mxlogo{
    width: 242px;
   height: 132px;
    display: block;
    margin: 0 auto
}
.mxlogo img{
    width: 100%;
    height: 100%;
    
}
.login-style{
    margin-top:20px ;
    display: flex;
    flex-direction:column ;
}
.user{
    position: relative;
}
.login-style input {
    width: 100%;
    height: 48px;
    font-size: 18px;
    border: none;
    color: #333;
    display: block;
        

}
.code-p{
    position: relative;
}
.botline{
    width: 100%;
    background: #EBECED;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
}
.ruler{
    display: flex;
    
    margin-top: 20px;
    
}
.ruler .checkbox{
    width: 12px;
    height: 12px;
    margin-top: 4px;
}
.ruler-text{
    font-size: 12px;
  
}
.ruler-text a{
 padding-left:3px;
    
   
}
.btn{
    width: 100%;
    height: 48px;
    margin-top: 10px;
 
}
.btn a {
    display: block;
    height: 100%;
     line-height: 48px;
    background-color:#FF80AA;
    color: #fff;
    border-radius: 20px ;
    text-align: center;
    font-size: 14px;
    opacity: .9;
}
.choose{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 18px;
}
.choose a{
    font-size: 12px;
    color: #5A6066;
}
.bottom{
    width: 100%;
    height: 92px;
    padding: 0 20px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    font-size: 12px;
    text-align: center;
   
}
.bottom-pic{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.bottom-pic a{
    
    width: 40px;
    height: 40px;
    display: block;
}
.bottom-pic img{
    width: 100%;
    height: 100%;
}
</style>