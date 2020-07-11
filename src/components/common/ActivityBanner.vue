<template>
  <div>
      <img v-lazy="url" :src="url" alt="">
  </div>
</template>

<script>
import Vue from "vue";
import {Lazyload} from "vant"
Vue.use(Lazyload, {
    lazyComponent: true
})
export default {
    props: ["url"]
}
</script>
<style lang="stylus" scoped>
img
    width 100%
</style>