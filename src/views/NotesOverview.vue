<template>
  <div class="notes">
    <NewNote :addNewNote="addNewNote" />
    <NoteItem
      v-for="note in notes"
      :key="note.id"
      :id="note.id"
      :title="note.title"
      :describe="note.describe"
      :date="note.date"
      :remove-note="removeNote"
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
  methods: {
    addNewNote(title, describe) {
      this.notes.push({
        id: this.notes.length + 1,
        title: title ?? "New Note",
        describe: describe ?? "Description",
        date: new Date().toLocaleDateString(),
      });
    },
    removeNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
};
</script>
