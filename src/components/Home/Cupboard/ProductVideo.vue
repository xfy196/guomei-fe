<!-- 
 * @description: 商品视频 
 * @fileName: ProductVideo.vue 
 * @author: 小小荧 
 * @date: 2020-07-10 14:38:07
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div class="pVContainer">
      <div class="gui-video-single-wrapper">
          <header style="background-color:#f2f2f2;"> <span class="title" style="color:;">商品视频</span></header>
          <div class="video-poster" style="background-image:url(//gfs13.gomein.net.cn/T1vcDmBmhv1RCvBVdK.jpg);"><a href="//gvd.m.gome.com.cn/video_info-5eb6785580b7f84752101d18.html" video-page-id="5eb6785580b7f84752101d18" data-code="4435908-1"><i class="btn-play"></i></a></div>
          <router-link to="#" tag="a" class="bottom-title">欧德罗Emma系列带盖多用双层真空杯</router-link>
      </div>

  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
.pVContainer
    margin-left: .26667rem;
    margin-right: .26667rem;
    .bottom-title
        display: block;
        width: 100%;
        padding: .30667rem .32rem .41333rem;
        font-size: .4rem;
        color: #262c32;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        background-color: #fff;
        border-radius: 0 0 .32rem .32rem;
    header 
        font-size: .48rem;
        color: #262c32;
        height: 1.33333rem;
        line-height: 1.33333rem;
        background-color: #fff;
        padding: 0 .29333rem;
        span 
            display: inline-block;
            font-weight: 700
    .video-poster
        width: 100%;
        height: 5.44rem;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        background-origin: content-box;
        background-clip: content-box;
        border-radius: .32rem .32rem 0 0;
        position: relative;
        .btn-play
            display: inline-block;
            width: 1.33333rem;
            height: 1.33333rem;
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAvVBMVEUAAAAAAAD////////////////9/f3///+dnZ1HR0f9/f0aGhpeXl7+/v7////////MzMz///8xMTH////////s7OzU1NTBwcGMjIz////////////////29vb4+Pjw8PD////o6Ojj4+P///////+tra2dnZ3///+Hh4f///94eHhra2v////////////+/v7R0dH8/Pzi4uK1tbVxcXH6+vr09PTu7u7q6urd3d329vbw8PDCwsKlpaX///9ghi1LAAAAPnRSTlMzALOnBK6fjWM8ozZAmXxjYhY5o5R+Z1xJNzMfEJCWhIJ7dXNUVE5MSEdEQz4sCPeS8K11TunYxr+k3syBabltL5AAAANYSURBVGjetNTZetowEIbh6S9ZincbDHhj39c06ZZ04f4vq0DbOE1IkIz9net5DzQz9EG5fLv0PRkJZhhMRNLzl9tc/bUilM09hjMxb55VBvF03MQh1h22p/HKMW3bdFbxtD3snvDmOOUVQJl/VKxWx6EzOZ2WdbT87DqIJxKA217TO63bLgCZ8NIQ30QAGy3oYosRA6INLwelLmAFNillBxbgpiWg0ANExybl7I4AvFAT4hMDRkCaBQaMCdeBQgm0TNLObAEyVIcSBjGjUs0EWKIIcR/oN6hkjT7gcxVoN3j5O/o/NdhdhnIJK6arii3I/BIUuhAOXZkj4IbvQ6GFnklXZ/Zghe9BuYtugyqo0YWbvw3tJHqFc53Ug9y9BfEBhEkVZQoM+BuQD8uhynIs+OehBEZMFRYbSM5BIUNAlRaAha8hLtGniutD8lfQBKJRNdQQmLyEQgMzqrwZjPAF5KFFNdSC9z+UwjCphkwD6XOIuwiolgK4/Bm0gaCaEtgUEI/QoZrqIOJPUALLppqyLSRPkERAtRVA/oMyMJtqy2bI/kI+RlRjI/h/IN7EgmpsgSY/QSlcqjUX6Qkao01K/Xp4NMtAbYxPUBNrUsm83e/vfpJ+azSPUAaLlLrZH/vxWV+ykB2gOVo60P72o61/w+cHyENHHTr1/Ub7DHkHiMHRgU7d6w2FA/aBcjDShvZ3n7Qkhpy26GpARd90hqKLLS0x1IX0h2KIJflo60FFX2/UV9YnD1NdqOixQUpN4ZFErA0VfVEbihiSIqxKQEUPKsuxQkQCTjmoGAqVRRLEYJaDiu7pUiYYGbCvhW7pUjaM39WasQ2AQAwDaZEYBhqgYf+1KN1yfHQEFkB6ObFju+JHx5MfFTzdOT95OgYGDPCAgcEbj2zgzQYWL6EMLFpBfIKygthS5USRpcppIiAgNIGJL2TOiA9SeeQJpXImTsKtVJxAuRUJSeUWFZARxVBAEkm8BARcEhORP63bfk3vRH7OFvTxs0U7xLTT0jqWtfPfMjQ0i0YznSwbTTMGLavTMm81O9oy2LXIwApBrFjHCqq06M0KE7+PR2sD3x4Rdl0o36dmUFOc6FUFGS63dKzrDBSQ+laqXpXEutfeUJHvP9XEqrKlVh+9AcPcrbiI04TCAAAAAElFTkSuQmCC") no-repeat 50%/100% content-box content-box;
            position: absolute;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
</style>