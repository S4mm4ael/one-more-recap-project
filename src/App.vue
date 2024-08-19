<template>
  <div id="app">
    <h1>My notes</h1>
    <div class="notes">
      <NoteItem
        v-for="note in notes"
        :key="note.id"
        :title="note.title"
        :describe="note.describe"
        :date="note.date"
      />
    </div>
  </div>
</template>

<script>
import {mockedNotes} from "./data/notes";
import NoteItem from "./components/Note/NoteItem.vue";

export default {
  name: "App",
  components: {
    NoteItem,
  },
  data() {
    return {
      notes: mockedNotes,
    };
  },
};
</script>
