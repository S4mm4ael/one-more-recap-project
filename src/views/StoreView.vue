<template>
  <div class="store-view">
    <p>{{ getMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "StoreView",
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
};
</script>

<style scoped></style>
