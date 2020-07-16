<template>
  <div class="container">
    <div>
      <img src="../assets/noMessage.png" alt="" />
    </div>
    <div>
      <h2>失联了</h2>
    </div>
    <div class="toIndex">
      <p>
        这个页面..."失联"了! <span>{{ countDownTime }}</span
        >秒后返回首页
      </p>
    </div>
    <router-link tag="a" to="/">去逛逛</router-link>
  </div>
</template>

<script>
export default {
  data() {
      return {
          time : 3
      }
  },
  computed: {
    countDownTime: {
      get() {
          if(this.time<0){
              this.$router.push("/")
              return 0
          }
        setTimeout(() => {
          this.time--;
        }, 1000);
        return this.time
      },
      set() {},
    },
  },
};
</script>
<style lang="stylus" scoped>
.container
    width 100%
    height 100%
    background-color #f2f2f2
    display flex
    flex-direction column
    justify-content center
    align-items center
    .toIndex
        color #999
        font-size 16px
    a
        font-size: 0.373333rem;
        line-height: 0.986667rem;
        min-width: 1.6rem;
        padding: 0 0.4rem;
        background: -webkit-linear-gradient(left, #fa1e8c, #fc1e56);
        background: linear-gradient(90deg, #fa1e8c, #fc1e56);
        color: #fff;
        text-align center
        border-radius 10px
        margin-top 20px
</style>
