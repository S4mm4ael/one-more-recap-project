<template>
  <div class="product-view">
    <PictureItem v-for="item in picturesList" :key="item.id" :product="item" />
  </div>
</template>

<script>
import {PictureItem} from "@/components/index";
export default {
  name: "ProductView",
  components: {
    PictureItem,
  },
  data() {
    return {
      picturesList: null,
    };
  },
  created() {
    this.picturesList = this.$store.getters.getProductsList;
  },
};
</script>

<style scoped>
.product-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
