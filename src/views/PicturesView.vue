<template>
  <div class="pictures-view">
    <p>
      Message from store: <b>{{ getMessage }}</b>
    </p>
    <input type="text" v-model="message" placeholder="Enter a message" />
    <button @click="setMessage">Set Message</button>
  </div>
</template>

<script>
export default {
  name: "PicturesView",
  data() {
    return {
      message: "",
    };
  },
  computed: {
    getMessage() {
      return this.$store.getters.getMessage;
    },
  },
  methods: {
    setMessage() {
      this.$store.dispatch("setMessage", this.message);
    },
  },
};
</script>

<style scoped>
.pictures-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.pictures-view p {
  font-size: 16px;
  margin-bottom: 10px;
}

.pictures-view input[type="text"] {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.pictures-view button {
  padding: 10px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pictures-view button:hover {
  background-color: #0056b3;
}
</style>
