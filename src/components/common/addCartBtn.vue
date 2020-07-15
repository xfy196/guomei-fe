<template>
  <span class="cart" @click="addCart(item)"></span>
</template>

<script>
import Vue from "vue";
import {Toast} from "vant"
Vue.use(Toast);

export default {
  props: ["item"],
  methods: {
    addCart(good) {
      // 拿到id之后我们需要到state中找到对应的数据然后放入到购物车的state中
      this.$store
        .dispatch("cart/addCart", good)
        .then(() => {
          //如果执行到这一步就说明添加购物车成功，加入提示信息
          Toast({
            message: "加入购物车成功",
            forbidClick: true,
          });
        })
        .catch(() => {
          Toast({
            message: "加入购物车失败",
            forbidClick: true,
          });
        });
    },
  },
};
</script>

<style lang="stylus">

.cart
     width: .74667rem;
     height: .74667rem;
     background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAwFBMVEUAAAD/RozzDFrzDFr/GG3zDFnyDVnzDFnyDVnzDVnzDVrzDVnzDVnzDVryDVv0DVnyDVryDVr1Dlv3EGD1Dlv2DlryDFn////+8fXzIGf5n733eqT92ub0L3HyFV/80eD++/z7w9b7utD7tMz3bZv+8/f0N3f4g6r2Voz0PXvzJGnyGWLyEFz+7PL95u793+n6qcT5krX4iK73cp/81uP8zNz7wNP6rcf6or/2ZJX1UYn1S4T1R4L5mrr4fKX3e6VlxvAAAAAAFnRSTlMAA+zUCvnw5N/CsKybhXlyY09JIDU2ctXixgAAAidJREFUSMell+l24jAMhZ2wQyBAQTe0LIGwFSgMpXtnef+3mk6YImQEaeH7hXRyjyXZloXRcBq+V8i7mYybL3h+wzFfwqmVsiTIlmrJ2nTFJQW3kj69WjVHR8hVT6xaT9EJUvVjujIlUNazK1IiRSXTKw7zBKmrA51LX8K1lGleL4GUjJbzS6SYXM/k2tbpW+z209kmOI/aHwxayWk6Zkt1a78h5oUSqf6vaG5rLtZRFAG9ZGFuW9kK7RFiSTHjG4vpgr+qxBmKrQ8wopghbJ5Y6f7Lskb7rBAeE2LDn9U+hCUhfATm8Y9uSzK7ww/+rGSMI/vEM/BOKgGu2cg6pkmCG2Cq6rrAPTEN45NgDLyqwg4wJMY3HglawEQV/pSheKZAkhGnIngFbokpmDxJ2hiowj/AjJi8sW/+Ex5U4Rqh6AQmQ5IXBKrwGct9M3MgnABzTdjHoxTaoQ6BsSZcIZKh2sV5B94U3SLELxLFKSgbrW/jhsR2ePrRsllbGXjGJ4v4FtiMQ6sz+KZBFj30yabzgPBWeBqf14qJsLRlm8A+wVnn8yIzv4FAMAJgh1/atQ5mvsIBd3aha9ysmNbkWnI/7ZLEdbg9fovKriEzs0HQ77Cp+nLp3RPADMDN/Jivyo8OE9eQc9J8KUd75voA2mxqvrr6sHZ6aPMh0XzlY085x6T6imcPD+eOK+cOSGePZJcPgZePncmD7kWj9eXDvK5t7v99aKqqv+D53AUqNo/SAAAAAElFTkSuQmCC') no-repeat 50%/90% content-box content-box
</style>
