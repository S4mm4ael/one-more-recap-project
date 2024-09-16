<template>
  <div class="pictures-view">
    <h1>Pictures view</h1>
  </div>
</template>

<script>
export default {
  name: "PicturesView",
  data() {
    return {
      picturesList: null,
    };
  },
  created() {
    this.picturesList = this.$store.getters.getPicturesList;
    console.log(this.picturesList);
  },
};
</script>

<style scoped>
.pictures-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
