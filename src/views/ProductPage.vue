<template>
  <div class="product-card">
    <div class="product-slider">
      <carousel
        :perPage="1"
        :paginationEnable="true"
        paginationColor="#b3b3b3"
        paginationActiveColor="#494ce8"
      >
        <slide v-for="(slide, index) in product.gallery" :key="index"
          ><img :src="slide.src" :alt="slide.name" class="product-card__image"
        /></slide>
      </carousel>
    </div>
    <div class="product-card__details">
      <h2 class="product-card__title">{{ product.title }}</h2>
      <p class="product-card__price">${{ product.price.toFixed(2) }}</p>
      <p class="product-card__description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPage",
  data() {
    return {
      id: this.$route.params.id,
      product: null,
    };
  },
  methods: {
    // Component methods go here
  },
  created() {
    this.product = this.$store.getters.getProductById(+this.id);
    console.log(this.product);
  },
  mounted() {
    // Lifecycle hook for when the component is mounted
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
}

.product-card__image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-card__details {
  text-align: center;
}

.product-card__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-card__price {
  font-size: 16px;
  color: #007bff;
  margin-bottom: 10px;
}

.product-card__description {
  font-size: 14px;
  color: #666;
}
.product-slider,
.product-card__details {
  width: 48%;
}
</style>
