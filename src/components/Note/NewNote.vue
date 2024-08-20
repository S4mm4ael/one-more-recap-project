<template>
  <div class="new-note">
    <h3>Add new note</h3>
    <input type="text" placeholder="Title" />
    <textarea placeholder="Describe"></textarea>
  </div>
</template>

<style scoped>
.new-note {
  margin-top: 20px;
}

h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  height: 200px;
}
</style>
