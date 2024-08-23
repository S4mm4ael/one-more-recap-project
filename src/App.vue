<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div id="app">
        <HeaderMain v-if="showHeader" />
        <MessageContainer />
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
import MessageContainer from "./components/Message/MessageContainer.vue";

export default {
  name: "App",
  components: {
    HeaderMain,
    MessageContainer,
  },
  computed: {
    showHeader() {
      return this.$route.name !== "App";
    },
  },
};
</script>
