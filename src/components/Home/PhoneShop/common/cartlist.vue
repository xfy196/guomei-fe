<template>
  <div>
    <waterfall 
    :width="itemWidth"
    :col="col"
    :data="items"
    :isTransition="true"
    :gutterWidth="gutterWidth"
    >
    <Cart v-for="item in items" :key="item.productId + Math.random()" :item="item"></Cart>
    </waterfall>
  </div>

</template>

<script>
import Vue from 'vue'
import waterfall from 'vue-waterfall2'
import Cart from "@/common/shop-item-cart";
Vue.use(waterfall)
export default {    
    props:["items"],
    data () {
        return {
            col:2
        }
    },
    components:{
        Cart
    },
    computed:{
	      itemWidth(){  
	            return (350*0.5*(document.documentElement.clientWidth/375))
	      },
	      gutterWidth(){
	            return (16*0.5*(document.documentElement.clientWidth/375))
	      }
        },
    mounted(){
    }    
}
</script>

<style lang="stylus" scoped>

</style>