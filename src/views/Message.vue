<template>
  <div>
    <!-- 头部导航栏 -->
    <TopBar></TopBar>
    <!-- 消息列表 -->
    <MessageList></MessageList>
    <!-- 导购列表 -->
    <GuideList></GuideList>
  </div>
</template>

<script>
import TopBar from '@/Message/TopBar'
import MessageList from '@/Message/MessageList'
import GuideList from '@/Message/GuideList'
export default {
  components: {
    TopBar,
    MessageList,
    GuideList
  }
}
</script>

<style lang="stylus" scoped>

</style>