<template>
  <newPostFrom @submit="onSubmit" />
</template>

<script>
import newPostFrom from "@/components/Admin/NewPostFrom.vue";
export default {
  components: {newPostFrom},
  layout: "admin",
  methods: {
    onSubmit() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>
