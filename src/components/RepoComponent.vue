<template>
  <table>
    <transition-group name="list" tag="tbody">
      <tr v-for="repo in repos" :key="repo.title">
        <td>
          <span>{{ repo.title }}</span>
        </td>
      </tr>
    </transition-group>
    <button
      class="btn btnPrimary"
      @click="loadMore"
      v-show="maxLength > 0"
      :disabled="maxLength === 0"
      :class="{btnDisabled: maxLength === 0}"
    >
      Load more
    </button>
  </table>
</template>

<script>
export default {
  props: {
    repos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    maxLength() {
      return this.$store.getters.getRepos.length;
    },
  },
  methods: {
    loadMore() {
      this.$store.dispatch("loadRepos").catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  text-align: center;
}
td {
  display: flex;
  justify-content: space-between;
  padding: 12px 6px;
  font-size: 14px;
}

/* Animation */
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

button {
  margin-top: 20px;
}
</style>
