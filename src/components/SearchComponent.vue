<template>
  <div class="wrapper__search">
    <SearchIcon />
    <div class="search">
      <input type="text" :placeholder="placeholder" v-model="search" />
    </div>
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

.search {
  display: flex;
}

.search-icon {
  height: 32px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  position: relative;
  top: 43px;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 30px;
  color: #909399;
  font-size: 16px;
  min-width: 400px;
  height: auto;
}
</style>
