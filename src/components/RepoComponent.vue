<template>
  <div class="repo-container">
    <table class="repo-table">
      <transition-group name="list" tag="tbody">
        <tr v-for="repo in repos" :key="repo.id" class="repo-row">
          <td class="repo-info">
            <a :href="repo.html_url" target="_blank" class="repo-name">{{
              repo.full_name
            }}</a>
            <p class="repo-description">{{ repo.description }}</p>
            <div class="repo-owner">
              <img
                :src="repo.owner.avatar_url"
                alt="Owner Avatar"
                class="owner-avatar"
              />
              <a
                :href="repo.owner.html_url"
                target="_blank"
                class="owner-name"
                >{{ repo.owner.login }}</a
              >
            </div>
          </td>
        </tr>
      </transition-group>
    </table>
    <button
      class="btn btnPrimary"
      @click="loadMore"
      v-show="maxLength > 0"
      :disabled="maxLength === 0"
      :class="{btnDisabled: maxLength === 0}"
    >
      Load more
    </button>
  </div>
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

<style scoped>
.repo-container {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.repo-table {
  width: 100%;
  border-collapse: collapse;
}

.repo-row {
  border-bottom: 1px solid #ddd;
}

.repo-info {
  padding: 10px;
}

.repo-name {
  font-size: 18px;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.repo-name:hover {
  text-decoration: underline;
}

.repo-description {
  margin: 5px 0;
  color: #555;
}

.repo-owner {
  display: flex;
  align-items: center;
}

.owner-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.owner-name {
  color: #007bff;
  text-decoration: none;
}

.owner-name:hover {
  text-decoration: underline;
}

.btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.btnPrimary {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
}

.btnDisabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
