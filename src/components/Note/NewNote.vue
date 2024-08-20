<template>
  <div class="new-note">
    <h3>Add new note</h3>
    <input type="text" placeholder="Title" v-model="title" />
    <textarea placeholder="Describe" v-model="description" />
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <button @click="handleAddNewNote">Add note</button>
  </div>
</template>

<script>
export default {
  name: "NewNote",
  props: {
    addNewNote: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      title: "",
      description: "",
      errorMessage: null,
    };
  },
  methods: {
    handleAddNewNote() {
      this.errorMessage = null;

      if (!this.title || !this.description) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      this.addNewNote(this.title, this.description);
      this.title = "";
      this.description = "";
    },
  },
};
</script>

<style scoped>
.new-note {
  margin-top: 20px;
  margin-bottom: 20px;
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

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>
