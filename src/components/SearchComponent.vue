<template>
  <div class="wrapper__search">
    <div class="wrapper__icon"><SearchIcon /></div>
    <input type="text" :placeholder="placeholder" v-model="search" />
  </div>
</template>

<script>
import SearchIcon from "./UI/SearchIcon.vue";

export default {
  components: {
    SearchIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search",
    },
  },
  data() {
    return {search: this.value};
  },
  watch: {
    search(val) {
      this.$emit("search", val);
    },
  },
};
</script>

<style scoped>
svg {
  color: #e4e4e4;
}

input {
  padding: 16px 16px 16px 56px !important;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 300px;
}
.wrapper__search {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper__icon {
  position: relative;
  left: 25px;
  bottom: 40px;
}
</style>
