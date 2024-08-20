<template>
  <div class="notes">
    <h1>Notes</h1>
    <NewNote />
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :title="note.title"
      :describe="note.describe"
      :date="note.date"
    />
  </div>
</template>

<script>
import {mockedNotes} from "../data/notes";
import NewNote from "../components/Note/NewNote.vue";
import NoteItem from "../components/Note/NoteItem.vue";

export default {
  name: "NotesOverview",
  components: {
    NewNote,
    NoteItem,
  },
  data() {
    return {
      notes: mockedNotes,
    };
  },
};
</script>
