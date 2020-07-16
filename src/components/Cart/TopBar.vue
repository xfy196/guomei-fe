<template>
  <div>
    <header class="header border-bottom">
      <!-- 左中右结构 -->
      <div class="h-left">
        <a @click="$router.go(-1)" class="h-back" id="goback">
          <van-icon
            class="left-arrow"
            size=".7rem"
            name="arrow-left"
            color="#626262"
          />
        </a>
      </div>

      <div class="h-cnt flex-cell">
        <div class="flex-box"><h2 class="h-tit">购物车</h2> <div class="h-add flex-box"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEUAAABbYGZaYWaPj49aYGZaYGdaYGZbY2liaG5cYmhla2taYGZeY2peZmdaYWdbYmdfZWleZmpaYWZaYGZbYWZaYGdbYmldY2lbYGdaYGZaYGZcYGdaYGZbYmdbY2daYmdbYWddYmhbYWZbYWdcYmlbYGdbYWZeY2haYGblsueVAAAAKHRSTlMA9vsD8bqlIw5YCtsmH5huGRXp39S/OivEta2clGZDiGBBzHlOx4wx+m5QvAAAAStJREFUKM91kdt6gjAQhJOQE0EBQQRE8dh23v8JS+J+BLSdC8LkX2aXhM3aFirjPFPFlr2rHARIYijX7FBB6NQ4Z1ItUB1WTEDNaUZBLGhZIU+iTXJUMTmHIkZUIZ/nFMKE9dI0l5BuhNgSLKD9kkoAkKl/1ygI9vAbhkOPowY3vhA9wQze61efPMQYZAQlbCjZeLMJ2xaSIIejknnbgROswzcNnt480UzPFnuCR5zDzPVmSq3DnGccCZ6h/J934EpxdEmISQlaidb3OQHAyYVUbhnpRCF2HC01+o4HL3FjC93Ad9E9kLnobI3H8hruGKIbcF9dUstxZfPwvGUrXcEP1FAgXQCauHqdrcSFvSvpUZchQrNPuS/sd1PRD/tLu72nUR+0Y//Trl/5X56vF89A3GwrAAAAAElFTkSuQmCC" class="h-add-icon"> <span>{{nowCity}}</span></div></div>
      </div>
      <div class="r-box">
        <div class="h-edit" @click="handleClick">{{modifyState ? "编辑" : "完成"}}</div>
        <SearchMenu></SearchMenu>
      </div>
    </header>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";
import {mapGetters} from "vuex"
import SearchMenu from "@/common/SearchMenu"
Vue.use(Icon);
export default {
  data() {
    return {
      modifyState : true
    };
  },
  methods: {
    handleClick(){
      this.modifyState = !this.modifyState
    }
  },
  computed: {
    ...mapGetters({
      nowCity: "getNowCity",
    })
  },
  components: {
    SearchMenu
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
    .h-back
        margin-left 12px
        font-size 16px
        display inline-block
        color #666
        height 44px
        line-height 1
        display flex
        align-items center
    .h-cnt
        margin-left 1.3rem
        flex 1
        text-align center
        display flex
        align-items center
        justify-content center
        .flex-box
          display flex
          align-items center
          .h-tit
            height 100%
            line-height 1.173333rem
            text-align center
            font-size .48rem
            font-weight 700
          .flex-box
            display flex
            align-items center
            .h-add-icon
              margin 0 .06rem
              width .373rem
              height .373rem
            span 
              font-size .333333rem
              display inline-block
              max-width 2.266667rem
              color #333
              overflow hidden
      .r-box
        display flex
        align-items center
        font-size .426667rem
        .h-edit 
          margin-right .48rem
</style>