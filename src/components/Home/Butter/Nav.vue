<template>
   <div class="nav1">
       <div class="nav1_l">
         <a href="" v-for="(item,index) in  images" :key="index">
           <img :src = "item" alt="">
         </a>
       </div>
       <div class="nav1_r">
         <a href="">抽烟机清洗</a>
         <a href="">冰箱清洗</a>
         <a href="">空调清洗</a>
         <a href="">微波炉清洗</a>
       </div>
     
</template>

<script>

import Vue from "vue";

export default {
     
       props:[images]
}
</script>

<style>

</style>