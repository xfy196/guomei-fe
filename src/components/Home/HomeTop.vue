<template>
    <!-- 首页头部 -->
    <header>
        <div class="location-box">
            <van-icon size=".4rem" name="location-o" />
            <span>{{l_city}}</span>
        </div>
        <div class="searchBox">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEUAAAC2traZmZmampqZmZmbm5uampqZmZmampqZmZmampqZmZmampqampqampqampqbm5uZmZmdnZ2ampqampqZmZk1NLL/AAAAFXRSTlMABebNNhgP3Ejq1NC2mHxmUh4T+WWB9YuQAAAAtElEQVQoz62TRxbDIAxEgwQGTHOb+181C8UtD8MiYSXxNU+g8vrTUS4xrcTJqQoshP1Q+Q6YGQhZG2V0DgDPN6o97HR4k4XXV61HHC7+EOFPvWLEezYVwcdNgRXtRW9R9lDCkffMD/rIHUKlDAFOjIRcwRlJDIauYA0Wg2Aq2IDEWKEqWGHtqDu5Oy/v/LtTtXbNmx2zQ7PfGJfGtLhR+NOsGeFPkyr8ac6Fb63FWLbht816Axg6C5ms05fBAAAAAElFTkSuQmCC" class="search-find">
            <span class="searchText">国美10亿焕新计划</span>
        </div>
        <div class="login-btn">
            <span class="login-text">登录</span>
        </div>
    </header>
</template>

<script>
import Vue from "vue";
import { Col, Row, Icon, Search } from "vant";
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Search);
export default {
  data() {
    return {
      l_city: "北京市"
    };
  }
};
</script>
<style lang="stylus" scoped>
header
    background-color #f20c59
    height 44px
    display flex
    .location-box
        padding-left 10px
        color #ffffff
        display flex
        flex-direction column
        justify-content center
        align-items center
        span 
            font-size 13px
    .searchBox
        border-radius: 1.33333rem;
        padding-left .041667rem
        flex 1
        margin-top 7px
        margin-left 10px
        margin-right 10px
        height 30px
        line-height 30px
        font-size 14px
        display flex
        align-items center
        background-color #ffffff
        .search-find 
            width: 15px
            height: 15px
            margin-right 3px
            margin-left 10px
            display block
        .searchText
            color #919599
    .login-btn
        line-height 44px
        padding-right 10px
        color #ffffff
        font-size 13px
</style>