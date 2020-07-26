<template>
  <div id="chat">
    <!-- 顶部导航栏 -->
    <TopBar></TopBar>
    <!-- 聊天内容区 -->
    <ChatContent></ChatContent>
    <!-- 底部输入框 -->
    <FooterInput></FooterInput>
  </div>
</template>

<script>
import TopBar from '@/Chat/TopBar';
import ChatContent from '@/Chat/ChatContent';
import FooterInput from '@/Chat/FooterInput';

export default {
  components: {
    TopBar,
    ChatContent,
    FooterInput
  }
}
</script>

<style lang="stylus" scoped>
#chat
  position relative
  height 100%
</style>