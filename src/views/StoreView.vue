<template>
  <div class="store-view">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "StoreView",
  data() {
    return {
      message: null,
    };
  },
  created() {
    this.message = "Hello, Vue!";
  },
};
</script>

<style scoped>
.store-view {
  /* Your styles here */
}
</style>
