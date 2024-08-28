<template>
  <div class="notes">
    <NewNote :addNewNote="addNewNote" />
    <div class="view-buttons-container">
      <SvgColumns :class="{active: column}" @click="toggleView(true)" />
      <SvgGrids :class="{active: !column}" @click="toggleView(false)" />
    </div>
    <SearchBox
      :value="searchQuery"
      placeholder="Find your note"
      @search="searchQuery = $event"
    />
    <div class="notes-container">
      <div :class="{'grid-view': !column, 'column-view': column}">
        <NoteItem
          v-for="note in filteredNotes"
          :key="note.id"
          :id="note.id"
          :title="note.title"
          :describe="note.describe"
          :date="note.date"
          :priority="note.priority"
          :remove-note="removeNote"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mockedNotes} from "../data/notes";
import NewNote from "../components/Note/NewNote.vue";
import NoteItem from "../components/Note/NoteItem.vue";
import SvgColumns from "../assets/svg/columns.svg";
import SvgGrids from "../assets/svg/grids.svg";
import SearchBox from "@/components/SearchBox/SearchBox.vue";

export default {
  name: "NotesOverview",
  components: {
    NewNote,
    NoteItem,
    SvgColumns,
    SvgGrids,
    SearchBox,
  },
  data() {
    return {
      notes: mockedNotes,
      column: true,
      searchQuery: "",
    };
  },
  computed: {
    filteredNotes() {
      if (!this.searchQuery) return this.notes;
      return this.notes.filter((note) =>
        note.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
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
    toggleView(isColumn) {
      this.column = isColumn;
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
.view-buttons-container svg.active {
  fill: blue;
}
.grid-view {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
  gap: 10px;
}
.column-view {
  display: flex;
  flex-direction: column; /* Items in a single column */
  gap: 10px;
}
.notes-container {
  margin-top: 15px;
}
</style>
