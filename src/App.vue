<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div id="app">
        <HeaderMain v-if="showHeader" />
        <section>
          <div class="container">
            <router-view />
          </div>
        </section>
      </div>
    </div>
  </div>
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
