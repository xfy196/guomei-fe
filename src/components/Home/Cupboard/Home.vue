<template>
  <div>
    <HomeTop></HomeTop>
    <HomeNav>
        <template #Swipe>
            <Swipe></Swipe>
        </template>
    </HomeNav>
  </div>
</template>

<script>
import Swipe from "@/Common/Swipe";
import HomeTop from "@/Home/HomeTop";
import HomeNav from "@/Home/HomeNav";
export default {
  components: {
    Swipe,
    HomeTop,
    HomeNav
  }
};
</script>