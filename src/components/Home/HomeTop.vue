<template>
  <!-- 首页头部 -->
  <header>
    <div class="location-box">
      <van-icon name="location-o" />
      <span>{{l_city}}</span>
    </div>
    <div class="searchBox">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEUAAAC2traZmZmampqZmZmbm5uampqZmZmampqZmZmampqZmZmampqampqampqampqbm5uZmZmdnZ2ampqampqZmZk1NLL/AAAAFXRSTlMABebNNhgP3Ejq1NC2mHxmUh4T+WWB9YuQAAAAtElEQVQoz62TRxbDIAxEgwQGTHOb+181C8UtD8MiYSXxNU+g8vrTUS4xrcTJqQoshP1Q+Q6YGQhZG2V0DgDPN6o97HR4k4XXV61HHC7+EOFPvWLEezYVwcdNgRXtRW9R9lDCkffMD/rIHUKlDAFOjIRcwRlJDIauYA0Wg2Aq2IDEWKEqWGHtqDu5Oy/v/LtTtXbNmx2zQ7PfGJfGtLhR+NOsGeFPkyr8ac6Fb63FWLbht816Axg6C5ms05fBAAAAAElFTkSuQmCC"
        class="search-find"
      />
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
header {
  background-color: #f20c59;
  height: 0.183333rem;
  display: flex;

  .location-box {
    padding-left: 0.041667rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 0.054167rem;
    }
  }

  .searchBox {
    border-radius: 1.33333rem;
    padding-left: 0.041667rem;
    flex: 1;
    margin-top: 0.029167rem;
    margin-left: 0.041667rem;
    margin-right: 0.041667rem;
    height: 0.125rem;
    line-height: 0.125rem;
    display: flex;
    align-items: center;
    background-color: #ffffff;

    .search-find {
      width: 0.0625rem;
      height: 0.0625rem;
      margin-right: 0.0125rem;
      display: block;
    }

    .searchText {
      color: #919599;
    }
  }

  .login-btn {
    line-height: 0.183333rem;
    padding-right: 0.041667rem;
    color: #ffffff;
    font-size: 0.054167rem;
  }
}
</style>