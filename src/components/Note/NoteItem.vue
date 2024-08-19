<template>
  <div class="note-item">
    <h3 class="note-header">{{ title }}</h3>
    <div class="note-body">
      <p>{{ describe }}</p>
      <span class="note-date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    describe: String,
    date: String,
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
</style>
