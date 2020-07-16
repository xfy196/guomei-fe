<template>
  <div>
      <van-tabs >
  <van-tab v-for="(item,index) in list" :key="index">
    <template #title>{{item.url}} </template>
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
                {url:"包装售后"},
            ]
        }
    }
}
</script>

<style>

</style>