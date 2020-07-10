<!-- 
 * @description: 模板头部正在开发中 
 * @fileName: template-header.vue 
 * @author: 小小荧 
 * @date: 2020-07-09 20:47:55
 * @后台人员:  
 * @version: V1.0.5 
!-->
<template>
  <div>
    <header
      class="template-header"
      :style="{background: url('img') }"
    ></header>
  </div>
</template>

<script>
export default {
    props : ["img"]
};
</script>

<style>
</style>