<template>

  <div class="item ">
    <h3 class="title" alt="大家电">大家电</h3>
    <ul class="list">
      <li>
        <router-link tag="a" to="#">
          <img
            class="loading-img default-bg-sm"
            src=""
            style="opacity: 1; transition: opacity 0.3s ease 0s;"
          />
          <span class="name">平板电视</span></router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ["cateId"],
    data(){
        list: []
    },
    created(){

    }
};
</script>

<style></style>
