<template>
  <div class="listContainer">
    <List></List>
    <CartBag></CartBag>
  </div>
</template>

<script>
import List from '@/List/List'
import CartBag from "@/common/CartBag"

export default {
  components : {
    List,
    CartBag
  }
}
</script>

<style lang="stylus" scoped>
.listContainer
  height 100%
</style>