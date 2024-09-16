<template>
  <div class="product-item">
    <img
      :src="product.image"
      :alt="product.title"
      class="product-item__image"
    />
    <div class="product-item__details">
      <router-link class="product-item__title" :to="/products/ + product.id">{{
        product.title
      }}</router-link>
      <p class="product-item__price">${{ product.price.toFixed(2) }}</p>
      <p class="product-item__description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  margin-bottom: 20px;
}

.product-item__image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-item__details {
  text-align: center;
}

.product-item__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-item__price {
  font-size: 16px;
  color: #007bff;
  margin-bottom: 10px;
}

.product-item__description {
  font-size: 14px;
  color: #666;
}
</style>
