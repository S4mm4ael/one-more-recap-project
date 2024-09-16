<template>
  <div class="pictures-view">
    <PictureItem
      v-for="item in picturesList"
      :key="item.id"
      :id="item.id"
      :titile="item.title"
      :price="item.price"
      :description="item.description"
      :image="item.image"
    />
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
