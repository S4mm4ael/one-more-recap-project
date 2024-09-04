<template>
  <div class="new-note">
    <h3>Add new note</h3>
    <div class="upper-container">
      <textarea
        type="text"
        placeholder="Title"
        v-model="title"
        class="title-input"
      />
      <select v-model="priority">
        <option value="usual">Usual</option>
        <option value="important">Important</option>
        <option value="veryImportant">Very Important</option>
      </select>
    </div>
    <textarea placeholder="Describe" v-model="description" />
    <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
    <button @click="handleAddNewNote">Add note</button>
    <ModalDefault
      v-if="toggleModal"
      :title="modalTitle"
      @closeModal="closeModal"
    >
      <div slot="body"><p>You can proceed with a new note</p></div>
    </ModalDefault>
  </div>
</template>

<script>
import ModalDefault from "../ModalDefault/ModalDefault.vue";

export default {
  name: "NewNote",
  components: {
    ModalDefault,
  },
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
      priority: "usual",
      errorMessage: null,
      toggleModal: false,
      modalTitle: "New note added!",
    };
  },
  methods: {
    handleAddNewNote() {
      this.errorMessage = null;

      if (!this.title || !this.description) {
        this.errorMessage = "Please fill in all fields";
        return;
      }

      this.addNewNote(this.title, this.description, this.priority);
      this.title = "";
      this.description = "";
      this.priority = "";
      this.toggleModal = true;
    },
    closeModal() {
      this.toggleModal = false;
    },
  },
};
</script>

<style scoped>
.new-note {
  margin-top: 20px;
  margin-bottom: 20px;
}
.title-input {
  height: 40px;
  overflow: hidden;
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

.upper-container {
  display: flex;
  gap: 10px;
}

.upper-container select {
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
