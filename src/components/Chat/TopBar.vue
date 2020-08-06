<template>
  <div>
    <van-nav-bar
      :title="guideName"
      left-arrow
      @click-left="onClickLeft"
      fixed
      placeholder
    />
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
Vue.use(NavBar);

export default {
  data() {
    return {
      guideName: ''
    }
  },
  methods: {
    onClickLeft(){
      this.$router.push('/message');
    }
  },
  mounted() {
    this.guideName = this.$route.query.guideName;
  },
}
</script>

<style lang="stylus" scoped>

</style>