<template>
  <div class="note-item">
    <div class="note-header-container">
      <h3 class="note-header">{{ title }}</h3>
      <button @click="removeNoteFromParent()" class="button-delete">X</button>
    </div>
    <div class="note-body">
      <p>{{ describe }}</p>
      <span class="note-date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,
    describe: String,
    date: String,
    removeNote: {
      type: Function,
      required: true,
    },
  },
  methods: {
    removeNoteFromParent() {
      this.removeNote(this.id);
    },
  },
};
</script>

<style scoped>
.note-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.note-header-container {
  display: flex;
  gap: 10px;
  align-items: center;
}
.note-header {
  margin: 0;
  font-size: 1.5em;
}
.note-body {
  margin-top: 10px;
}
.note-date {
  display: block;
  font-size: 0.8em;
  color: #666;
}
.button-delete {
  background-color: rgb(185, 38, 38);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
