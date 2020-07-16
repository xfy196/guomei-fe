<template>
  <div>
    <header class="header border-bottom">
      <!-- 左中右结构 -->
      <leftArraw></leftArraw>

      <div class="h-cnt flex-cell">
        <!-- 搜索模块 -->
        <div class="input-box index-input" id="widget_search">
          <input
            type="text"
            input_key="国美超市开业钜惠"
            placeholder_str="国美超市开业钜惠"
            placeholder="国美超市开业钜惠"
            value=""
            class="sec-ipt "
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAQlBMVEUAAAC2traZmZmampqZmZmbm5uampqZmZmampqZmZmampqZmZmampqampqampqampqbm5uZmZmdnZ2ampqampqZmZk1NLL/AAAAFXRSTlMABebNNhgP3Ejq1NC2mHxmUh4T+WWB9YuQAAAAtElEQVQoz62TRxbDIAxEgwQGTHOb+181C8UtD8MiYSXxNU+g8vrTUS4xrcTJqQoshP1Q+Q6YGQhZG2V0DgDPN6o97HR4k4XXV61HHC7+EOFPvWLEezYVwcdNgRXtRW9R9lDCkffMD/rIHUKlDAFOjIRcwRlJDIauYA0Wg2Aq2IDEWKEqWGHtqDu5Oy/v/LtTtXbNmx2zQ7PfGJfGtLhR+NOsGeFPkyr8ac6Fb63FWLbht816Axg6C5ms05fBAAAAAElFTkSuQmCC"
            class="search-find"
          />
        </div>
      </div>
      <SearchMenu></SearchMenu>
    </header>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import SearchMenu from "@/common/SearchMenu"
import leftArraw from "@/common/leftArrow"
Vue.use(Icon);
export default {
  components: {
    SearchMenu,
    leftArraw
  }
};
</script>
<style lang="stylus" scoped>
.header
    font-size 12px
    color #000
    background #fff
    width 100%
    z-index 2
    position relative
    height 44px
    display flex
    border-color #cccccc
    .h-cnt
        margin-left 15px
        margin-right 18px
        flex 1
        text-align center
        display flex
        align-items center
    .index-input
        paddig-left 10px
    .input-box
        flex 1
        height: 30px;
        padding: 0 10px 0 10px;
        border-radius: 55px;
        text-align: left;
        background-color: #f6f6f6;
        position: relative;
        input
            display: block;
            width: 100%;
            height: 100%;
            font-size: 12px;
            background: none;
            outline: 0;
            border 0
        img
            position absolute
            right 10px
            top 7px
            width 14px

</style>