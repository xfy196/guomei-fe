<template>
  <div id="footer">
    <div class="dialog-box">
      <input type="text" placeholder="请输入您要咨询的问题" v-model="msg">
      <div class="options">
        <span><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAMAAAC5dNAvAAAAAXNSR0IArs4c6QAAAdFQTFRFAAAA////////qqqqv7+/mZmZqqqqtra2qqqqmZmZoqKiqqqqpKSkmZmZn5+fnJycoaGhmZmZm5ubn5+fnZ2dm5ubmZmZn5+fm5ubnp6emZmZn5+fmpqanZ2dmZmZm5ubnp6enJycmZmZm5ubnZ2dmpqam5ubm5ubnZ2dnJycmZmZm5ubm5ubnJycmZmZnJycmpqamZmZmpqanJycmpqam5ubmpqampqamZmZmpqamZmZmpqam5ubmpqamZmZmpqampqampqamZmZmpqamZmZmpqampqam5ubmpqampqam5ubmZmZmpqamZmZmpqam5ubmZmZmZmZmpqamZmZmpqampqamZmZmpqamZmZmpqamZmZmpqampqamZmZmpqampqampqamZmZmpqampqampqamZmZmpqampqampqamZmZmpqamZmZmZmZmpqamZmZmpqamZmZmZmZmpqamZmZmpqamZmZmpqampqamZmZmpqamZmZmZmZmpqamZmZmpqamZmZmpqamZmZmpqampqamZmZmZmZmpqamZmZmpqamZmZmZmZmpqamZmZmZmZmpqamZmZmpqamZmZmpqamZmZmpqamZmZmZmZmpqamZmZmpqamZmZ7dNKdwAAAJp0Uk5TAAECAwQFBgcJCgsMDg8QEhMUFxgaHB4gISIjJSYnKCkqLC0uLzAzODk7PD1CQ0ZISUtMTU5PUVNVXV9gZmpsbW9yc3R2d3l6fH5/gIGCg4SFh4uMjY6PkJGSlJeam52foaOkpqmqrK6zt7i5vL2+wMPGx8jJy8zP0NHS09nd3t/g4uPl5ufo6ers7u/w8fLz9PX3+Pn6+/z9/qBxJykAAARDSURBVFjDvVj5XxJREF+wVssjitSwsjzSDtfS3Owy0rD7UKHCMirLDpIyQyvLtMwUpTQjoflrmz2w2DfLHlDzix/fvBnezpv3/c4Mx2WVkqaOYHhiKpZIxKYmwsGOphLOrhQIvdEkaCQZ7RUKbDir98+Cjsz66y06ax1VLFPjIZ9YV+nieVdlnegLjaeU9dFWC87a38g2M/1imVZVJvbPyMo37SadVUek7SuDzU6dmDYPrkg7hqtNOON7Erh1qc+dbZO7bwk3JXp4I2+eMdy3GnAZ7XMFVnHj2DaDqMVx00itmZjUjuDWeNYI+qRP8DrMxdjhlcLi09dfR/Vkg/kMaJhEg+s6v+64i8pIqZX0LJWS4C7tTzrbEG8t3fkh6XyUphsVA06rb9E5gGbdxJ1KZ3Naf9tO6XzM/XowQyK8HeDhMX5xj2YNs3ey1B6QleL9jmWepAfzrcEuMDZg/vVkvHpc8NrGWc6Lh/kbD/DzRxz23TnwvQ1n3OpqLZeD1K7+fbuIlgEuJwkgnq4hOeKbKzd3LsS/NN4jL/RxOUof8ofKWYjk7lzduRHv69PfPcioi/bW612164CHWB0E8MtMgnzarFW2LABM0Mh99ifA443McjPyr8TnAjKg9ukfltl/bivh7ZrCswxYOJEvBfzbCxDUqNa9V8j5Nuut4oeiOsZo+gF68U8UoE2jOahWDz8LGaPLquoVoxEBolgjJSGl5frOdDVSwxg9UjXfGE1ZCpIlUujGtZobaXcHGaNoWsWi2bgUvA6AkFZxOm2zi7F5qGoW2bCGADq4IEGVgmqzsp6xOa+qRkiSDnJhAJEBnLeKDYEL7u+KimB/vIsw9w6gjtE0yekwvZnIuzOyt2fEk6nDzOemACpZ1f6PAC+2kK/i5FdI3qFIqhJgiosBUOBUsKNc77UX7d5Ev2WAGIcswXN5ER4ZI9/udD7WDiJLH0tfhR2Rr2KCShRbIicKlcb2RE7jYLZ61JLIj4yCAHsiQwAFUPYEAaqJhE9bosAnBe52byKqUE9/Ptyp1EMRow1JEyNB22I8ZPCOryyd0qFtzs8UFS+NkucccrpOUUGUPFicQlcWb0d+MVT/p+QhCrIn2La36HrbswzwulCvICPKRdcHJOZ9Ot52fgJY2K5fLhLFbNVngB/HSG/CIsByY5Ziliq1a75g/O6zwFrkx1nFspC11KYagQqJa+c6N2SWVicwCvBxD9EIRAzalOJ7EqHO32hc+52aq9PSUtht1KbQTdQh2Rriz29d7rp48+m8/F/suHETpdPi8Sc/aOZF893FZlo8vQa0QBj4M4paeCAWmmtAs7XH5aL3gv/S6aNVFtrjnJp3378fLeR78JHnsYwaP4tDo+7/N9KyPHDz/N9xoIlhpVMdVkaqTd5YepQabGNHqW1WR6l5H/TK/BbQH0MHrI6hFTTJ45BckRIhc4QvGIzwfwN5p1QR+DkMBQAAAABJRU5ErkJggg==" alt=""></span>
        <span class="send-msg" @click="sendMsg">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client';

Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://localhost:3000'),
}))

export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    sendMsg() {
      this.$store.commit('message/addMsg', {
        id: new Date().getTime(),
        source: "mine",
        msg: this.msg,
        img: "http://gfs14.gomein.net.cn/T1YvKTBsDv1RCvBVdK.png",
      });

      // 发送socket数据
      this.$socket.emit('chatMessage', this.msg);
      this.msg = '';

      // 接收socket数据
      let p = new Promise((resolve, reject) => {
        this.sockets.listener.subscribe('chatMessage', (data) => {
          resolve(data);
        })
      })
      Promise.race([p]).then((data) => {
        setTimeout(() => {
          this.$store.commit('message/addMsg', {
            id: new Date().getTime(),
            source: "guide",
            msg: data,
            img: "http://gfs11.gomein.net.cn/T1HUWmBmbT1RCvBVdK_60_60.jpg",
          });
        }, 500)
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
#footer
  width 100%
  position absolute
  left 0
  bottom 0
  .dialog-box
    background: #f9f9f9
    height 50px
    padding 0 12px
    display flex
    align-items center
    justify-content space-between
    input 
      border: 0.5px solid #c5c5c5
      height 32px
      width 260px
      font-size 14px
      text-indent 10px
    .options
      padding-left 10px
      flex 1
      height 34px
      display flex
      align-items center
      justify-content space-between
      span 
        height 32px
        img 
          margin-top 2px
          vertical-align top
          height 28px
        &.send-msg
          width 42px
          height 30px
          color #5a6066
          border 0.5px solid #999999
          border-radius 34px
          font-size 14px
          line-height 28px
          text-align center

</style>