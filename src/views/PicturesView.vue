<template>
  <div class="pictures-view">
    <PictureItem v-for="item in picturesList" :key="item.id" :picture="item" />
  </div>
</template>

<script>
import {PictureItem} from "@/components/index";
export default {
  name: "PicturesView",
  components: {
    PictureItem,
  },
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
