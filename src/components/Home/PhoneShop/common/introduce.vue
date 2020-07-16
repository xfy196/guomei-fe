<template>
  <div>
      <van-tabs v-model="active">
  <van-tab v-for="index in 2" :key="index">
    <template #title> <van-icon name="more-o" />选项 </template>
    内容 {{ index }}
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
    data () {
        return {
            list:[
                {url:"商品介绍"},
                {url:"规格参数"},
                {url:""},
                {url:""},
                {url:""},
                {url:""}
            ]
        }
    }
}
</script>

<style>

</style>