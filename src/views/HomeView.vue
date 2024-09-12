<template>
  <div id="home">
    <div class="note-header">
      <h1>Home</h1>
    </div>
    <div class="content">
      <p>
        Welcome to the Home Page! Here you can find various resources and links.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  methods: {
    showAlert() {
      alert("Button clicked!");
    },
  },
};
</script>

<style scoped>
#home {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.note-header {
  background-color: #f5f5f5;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.content {
  margin-top: 20px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
