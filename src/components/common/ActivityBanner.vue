<template>
  <div>
      <img :src="url" alt="">
  </div>
</template>

<script>
export default {
    props: ["url"]
}
</script>
<style lang="stylus" scoped>
img
    width 100%
</style>