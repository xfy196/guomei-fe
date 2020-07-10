<template>
  <footer>
    <van-tabbar route active-color="#f20c59" inactive-color="#919599" v-model="active">
      <van-tabbar-item to="/home">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon[0].active : icon[0].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="search" to="/shop">
        <span>门店</span>
        <template #icon="props">
          <img :src="props.active ? icon[1].active : icon[1].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/message">
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ? icon[2].active : icon[2].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/cart">
        <span>购物车</span>
        <template #icon="props">
          <img :src="props.active ? icon[3].active : icon[3].inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon[3].active : icon[3].inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </footer>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  data() {
    return {
      active: 1,
      icon: [
        {
          active:
            "https://js.gomein.net.cn/ssr/statics/images/nav-home-on.9780927.png",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAdVBMVEUAAABbYWdaYGZbYWhbYGdcYmddZWqAgIBaYGZiZXFdb29bYWdbYGdbYWdbYGZaYGZbYGZaYGZaYGZcYWhbYGdaYWdbYWZbYWdbYWdbYWdeZ2lggIBbYGZbYmdcYmddYmdcZGpeYmlbYWdaYGZaYWdaYWZaYGazu1moAAAAJnRSTlMArvpRxjwdBdERDLaedvPt49uTQ+e9poqBWRYItGRLNC0ja6yZbsjvWU0AAAFASURBVEjH3dPZboMwFARQs5iwBhLIQvak7fz/J3ao3FhuEq6Rqj50nvD4CAzG6jdySS8T9LlGffbWeg5grj11Sz341kufQqCLOiA8eeiIurmqa0MfibqnXiS8SBb0vaCPRn/746i+AUh3ZrBLOfoY0dWgs/swizmuXuotZ2Pqe/LBb1/oDedWuVPlK3abp3rJmWL/o9wXbJdPdMk+mD3Us4B9+dCu2a6NFmfsPYTnPqxQfiv7/sI3s18XI9rsSG73TuAKg8/MnxF6cPM3Hah7mVPx/kothlPgw3nKGp76pVZeXLXvlIwnZ/4b10EDpn5rfXgVwiSsZK6p79EiPwBFopikAA4i57qpvzzQCVy49DQXoJ7Aj0Dsz7MOqLz5NeZaMpdHJsbY9lbOedErh9s43O7vBJ62ykngxG3LrVZ/lE85Vz0IhM52KQAAAABJRU5ErkJggg=="
        },
        {
          active:
            "https://js.gomein.net.cn/ssr/statics/images/nav-store-on.1a12cfd.png",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAkFBMVEUAAABaYWZiY2xaYWZaYGZaYWdaYGdbYWdmbW9dYGddY2liZmlreHhbYGZbYWZcYmddYmdaYWZaYGdbYWZaYWdbYmdbY2hdZGlaYWdbYGZbYWdbYWZdZGldZGdbYWZbYWdbYmddYWdhZW9bYWdaYWdaYGdbYGdbYWdbYGdaYWZaYWdcYWZaYGZbYWdbYWdaYGamp08ZAAAAL3RSTlMA5Rr59bzLTgtIKxUG8bJZN+zCopJeMR3d0qeXJyPWikE8Eq2Hd3FT6J18aqqBZGzxncMAAAIPSURBVEjHjZSJeoIwEIRFDhEFQcWzxfu2/d//7QoRCYRQme/zWidsdmZ3Oxrsw8vjFPe/Oi0wP9vkMNb9D+TB1KSM5b8HHr4gOYfpcWJfyWB3m8jDNSnG8SD/HW6y00aoZ7t2nl25m9XT0lfAbagEd1HKn2nYd+CkUSoBo37/GTDVJf2O4FCL2mDra9oCYT1mNtk4gbESOsC60WgTvKrkFnzXifLx90qgB8tmsy/gVAIbODbTXRNcJV2cfx31SklHr8+FclUbtjmjZNYJXmfHsCvTl0XtMTDK8wDxW7eLJIvjW5mIYBSGowCw5d9Ke/2+uzChQJL3sgEVD88QFDpMyDFxi36Kqn0E5l7aeH86zvM+L8k8qUrrwKZxgH3od1RbrXkDfS1NlY//t4Fr8xeauT8q9oaQQcUPmH3NerAhGmjiY7BC7cD3tAIs4OopwSlw1tf0FaV5q0viph149xiLcn3wd6X7PckN2s+V/p0JtyMw4+J2Y+Am8prmSLJj3u3vXSns9RbFTS5geYWyV9kB8yUQ7DOKL6t0E0hcWY/hFmUEgLET29gvfPAsWOVbU1H2SIpF9hL55WQ9RPmJugP7ERlWrtJnZibHI02qbNhuZvCvYrrzah1HZ9vP0qttYktMYPo+6LRBAH2xcrxWdEfQV7DcdT9itgZ/mBps0RZHIWlb/iqveeoYH7EIpJWt8QdtK1lnzDcLvwAAAABJRU5ErkJggg=="
        },
        {
          active: "",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAABbYGdbYGZbYGdaYWZeYmdcYWZbYGZxdXVbY2leZWhaYWZaYWdaYWdbYWdeZGlbYWdbYWdbYWZeZGhhZWtbYGdaYWdbYWZbYWdbYWdbYmZdbW1qam9aYGZaYGZaYGdaYGZaYWdbYmdfY2xaYGdaYGdcYmhbYWdbYWZbYWdbYGZaYGbV2vBXAAAAK3RSTlMA6S3k+zkx3wU3HpTdr28rp2jZJxXGvYJ7X08QCu7Sy8K3Rhr0eFedmVKIARZ+UAAAActJREFUSMetlOt2gjAQhAOoYBRRKVehirX2Mu//fs2S0ISCSc9pvz+EZVhmNxvYn3la14eirK5J49Ym5RkDt7h6sorrZ4xZxOlD8TJDT5DFm7fuuZUvvL/MiqNN/zTf8SGy/jz2nuoZ9SmHYM/H0WvvrpyoU0p0WbEJlUdZoh+5Sb0RwSmcPvA+9p0L1wc2TxMD2JkRqpLU80SdSHY1OkhOZpXaaqidZsAlYhbSm2GnBrBiVgqgPam1KH3P7DQeUKipEoVw5mAHHOWqBHL3VC8AOW1nKsPJBXjt3wNAXtxuLv3cAYEKlYE34bhkAi2rgUztHuaI5cMXYEHXA0UkOWY4qFyiVjqKhR6AKPUnfJ8lD/C13AXJE1ny/jdyYYa+dKdS3VC/m3Ejo2Rl4DejUwuEw2vRbGe2pr4kz8oUH3o1xtdqPSohoHbuNQxMzPOcYEiaAR/MxUaOjCCmnXPAhc9KLvfuASbNUfXjjSbZzh3AXdsq7Oq0BTq1dmfnAeCpUXOXmoSjn9gZqC3qj5tQ3/V9a/sp8RhCXenACcDpoZEWwvfSiKzFvW0z0XEzUgGLrSRUnFe6zO2PAfnEBNvx6jDB1lh/abDuSdk/8QVixkk9ApObfAAAAABJRU5ErkJggg=="
        },
        {
          active: "",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAABbYGdbYmZaYWZcYWZbYWZbYWdbYWdaYWdcZGhiZmhaYGdbYWdbYWdbYWdbYGdbYWdcYmhcY2heZWhocXGLi4uAgIBbYGZbYGZbYWdbYWhbYWhbYWdbYWhdY2hjampbYWZbYGdaYWddam9bYWZbYmdcYWhbYGZbYWZdYWleYmZaYGZdxFkfAAAAK3RSTlMAj3CWafWpWNohFO/CsaSKg0UvGgkEAubi0HlmXz0oD8i+uQ2bUUygYz86bKirLgAAAXNJREFUSMeVlNmSgjAQRd0ABRdAAREQ3HXO///f1BRKYJIQPE99U7cgSd/O6Eu2U/sP/zLMvqbGH2b3qTkN3E3gOM4M9qPhRMDuC/8cwnfpjNVsblFjX4FTVwVaKrdlX9VViJ71x36F87ssJmp84PP5HB4jA0t4vcsbrEz2VFxHMKBPnthMCKnBvQPrUy9gbrAvWp13wTPYC6jaKTDYHbAbYRlDM4FxIxLY9ts3cGhn7Gico7wRFfwYmxo04iyEjPx/G5x+uwVi/K+Q9bpLsKRz6zl2+n7QPh3KEM5g2mvPYC1ULpSaKUyEuhvmI0qg6ORtaQjYPhLSMB9bD3wp/FpOkJTdLnj6ubP51/TY0iY4vs+BjRS45VTFKgEYx137nR68p/TPAzr2G1f1MuQzBdkt1F1AqV53I8XiZQ3Lhbz+mmMpsn0FSJX9FEPduXgUz8ETgPNQeybsHR4AaSxtxgLVHJc2VIqjBkmdAImLq3mqxev5CxuJP+HLMERKAAAAAElFTkSuQmCC"
        },
        {
          active: "",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAhFBMVEUAAABcYGdaYmdbYGZaYWZbYWZcYmhaYGZbYGddY2hgZ2paYWddZWhaYGZaYWdbYWdjbnBvb29aYWdbYGdbYWdaYWdbYWdbYmhbYmdfZGdfZWlbYGZbYWdbYGdbYWdcYmhcYWddYmhfbG96enpbYGZaYWdaYWdbYWZaYWddYWhbYWdaYGZtfGsbAAAAK3RSTlMAco3x+tE69ekpGLcd2KFcCwjdwKmSZ0otJBTlgXlgVUU1DwTGr5eJcEBQpGsq/QAAAaNJREFUSMe9lNmWojAURWMTJplFEBEHxLH2//9fK5aNYiWw+qH22705CXeRcyJ+m2nuBbYRHDelGKbMJN/Y1X5IbTm8MHP16i8JpPky3rsXEzAsnbowwFk8q+he+Rq5CcHLuuuAp1ZvwHib1pKw0x2+fu+cNMeXYMfvLb9rfVDD8YcPXhXyHZz7vRAi1U+HSb+XwUUhX0DW781hqzIAeD/MXqisCHbPhUuQsVBwgPXH6HOhYtu/1asEjckCmE1fRnEgFWrcD0eupprYbdI2FJXbJMv8ANi1UrxI6RMUSrFJHztL2qXmZPauKsm4Ib1JEfv5wbhP5OX7zkuky9eh21ye/a6RiI79fdWx3ut5KVTEZwnyaeTmcCs2Qke96lI+uakjocdfPf3n261VBrCefjiB2YhBwofbYqPdNkgBzuNxMcUYVm1Sjl1C9Xiwaze5KsXnozAFQ4ziCF93Q6Tj5DOoxbZLox4LjEbkcBqjTgIIhVjDeYw6BHkzcQXVsLoOeDglgtmfAcI2aWEbBINRyOo7pGP09vzfVZbby0TLJbom4r/4C9hGQx05kuDaAAAAAElFTkSuQmCC"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
footer
  height 50px
  position fixed
  bottom 0
  width 100%
</style>