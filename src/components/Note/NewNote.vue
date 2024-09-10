<template>
  <div class="new-note">
    <h3>Add new note</h3>
    <div class="upper-container">
      <textarea
        type="text"
        placeholder="Title"
        v-model="title"
        :class="{
          error: !$v.title.required || !$v.title.minLength,
        }"
        @change="$v.title.$touch()"
      />
      <select v-model="priority">
        <option value="usual">Usual</option>
        <option value="important">Important</option>
        <option value="veryImportant">Very Important</option>
      </select>
    </div>
    <textarea
      placeholder="Describe"
      v-model="description"
      :class="{
        error: !$v.description.required || !$v.description.minLength,
      }"
    />
    <p class="error-message" v-if="!$v.title.required">Title is required</p>
    <p class="error-message" v-if="!$v.title.minLength">
      Minimum length for title should be 3
    </p>
    <p class="error-message" v-if="!$v.description.minLength">
      Minimum length for title should be 10+ characters
    </p>
    <button @click="handleAddNewNote" :disabled="$v.$invalid">Add note</button>
    <ModalDefault
      v-show="toggleModal"
      :title="modalTitle"
      @closeModal="closeModal"
      position="top"
    >
      <div slot="body"><p>You can proceed with a new note</p></div>
    </ModalDefault>
  </div>
</template>

<script>
import ModalDefault from "../ModalDefault/ModalDefault.vue";
import {required, minLength} from "vuelidate/lib/validators";

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
  validations() {
    return {
      title: {
        required,
        minLength: minLength(3),
      },
      description: {
        minLength: minLength(10),
      },
    };
  },
  methods: {
    handleAddNewNote() {
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 10px;
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
.error {
  border: 1px solid red;
}
</style>
