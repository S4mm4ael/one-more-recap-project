<template>
  <div class="modal-wrapper" @click="$emit('closeModal')">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="modal-title">{{ title }}</h3>
        <button class="modal-close" @click="$emit('closeModal')">X</button>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String, required: true},
    closeModal: {type: Function, required: true},
  },
  methods: {
    handleKeydown(e) {
      console.log(e.key);
      e.key === "Escape" && this.$emit("closeModal");
    },
  },
  mounted() {
    document.body.addEventListener("keydown", this.handleKeydown);
  },
  beforeDestroy() {
    document.body.removeEventListener("keydown", this.handleKeydown);
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  width: 50%;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.modal-title {
  margin: 0;
  font-size: 1.5em;
}
.modal-close {
  background-color: rgb(185, 38, 38);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.modal-body {
  margin-top: 10px;
}
</style>
