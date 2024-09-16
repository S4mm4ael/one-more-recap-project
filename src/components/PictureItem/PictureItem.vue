<template>
  <div class="picture-item">
    <img
      :src="picture.image"
      :alt="picture.title"
      class="picture-item__image"
    />
    <div class="picture-item__details">
      <h2 class="picture-item__title">{{ picture.title }}</h2>
      <p class="picture-item__price">${{ picture.price.toFixed(2) }}</p>
      <p class="picture-item__description">{{ picture.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PictureItem",
  props: {
    picture: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.picture-item {
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

.picture-item__image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.picture-item__details {
  text-align: center;
}

.picture-item__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.picture-item__price {
  font-size: 16px;
  color: #007bff;
  margin-bottom: 10px;
}

.picture-item__description {
  font-size: 14px;
  color: #666;
}
</style>
