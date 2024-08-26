<template>
  <div class="notes">
    <NewNote :addNewNote="addNewNote" />
    <div class="view-buttons-container">
      <SvgColumns />
      <SvgGrids />
    </div>
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
import SvgColumns from "../assets/svg/columns.svg";
import SvgGrids from "../assets/svg/grids.svg";

export default {
  name: "NotesOverview",
  components: {
    NewNote,
    NoteItem,
    SvgColumns,
    SvgGrids,
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

<style scoped>
.view-buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 10px;
  margin-left: 90%;
}
.view-buttons-container svg:hover {
  transform: scale(1.1);
  transition: transform 0.3s;
}
.view-buttons-container svg {
  cursor: pointer;
}
</style>
