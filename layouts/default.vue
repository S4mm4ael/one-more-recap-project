<template>
  <div class="wrapper">
    <Header />
    <NuxtPage />
  </div>
</template>

<script>
import Header from "~/components/system/Header.vue";
export default {
  components: {Header},
};
</script>
