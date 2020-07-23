<template>
  <div v-if="isGoTop" @click="handleClick" class="goto-top">
    <img
      src="https://js.gomein.net.cn/ssr/statics/images/return-top.ae68c0e.png"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      isGoTop: "getGoTop",
    }),
  },
  methods: {
    handleClick() {
        // 拿到滚动的节点然后滚动
      document.querySelector(".container").scrollTo({
        top: 0,
        behavior : "smooth"
      });
    },
  },
};
</script>
<style lang="stylus" scoped>
.goto-top
    width 1.06667rem
    height 1.06667rem
    position fixed
    right .4rem
    bottom 2rem
    z-index 5
    img
        width 100%
        height 100%
</style>
