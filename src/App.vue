<template>
  <div id="app"><HeaderMain v-if="showHeader" /> <router-view /></div>
</template>

<script>
import HeaderMain from "./components/Header/HeaderMain.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
  },
  computed: {
    showHeader() {
      return this.$route.name !== "App";
    },
  },
};
</script>
