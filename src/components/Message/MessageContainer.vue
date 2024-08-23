<template>
  <span class="" message>{{ message }}</span>
</template>

<script>
export default {
  name: "MessageContainer",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.message {
  color: red;
}
</style>
