<template>
  <div v-if="show" class="message-container">
    <div class="message">{{ message }}</div>
  </div>
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
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = false;
    }, 3000);
  },
};
</script>

<style scoped>
.message-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.message {
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  transition: opacity 0.5s ease-in-out;
  opacity: 1;
}

.message-container[style*="display: none"] .message {
  opacity: 0;
}
</style>
