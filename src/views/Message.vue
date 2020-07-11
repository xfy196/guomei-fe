<template>
  <div>
    <!-- 返回功能 -->
    <GoBack></GoBack>
    <!-- 消息列表 -->
    <MessageList></MessageList>
    <!-- 导购列表 -->
    <GuideList></GuideList>
  </div>
</template>

<script>
import GoBack from '@/Message/GoBack'
import MessageList from '@/Message/MessageList'
import GuideList from '@/Message/GuideList'
export default {
  components: {
    GoBack,
    MessageList,
    GuideList
  }
}
</script>

<style lang="stylus" scoped>

</style>