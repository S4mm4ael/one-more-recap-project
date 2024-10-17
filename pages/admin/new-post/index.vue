<template>
  <newPostFrom @submit="onSubmit" />
</template>

<script>
import newPostFrom from "@/components/Admin/NewPostFrom.vue";
export default {
  components: {newPostFrom},
  layout: "admin",
  methods: {
    onSubmit(post) {
      this.$store.dispatch("posts/createPost", post).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
