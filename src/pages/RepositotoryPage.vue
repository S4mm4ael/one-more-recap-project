<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="repo__wrapper">
          <div class="repo-title">
            <p>GitHub repository search</p>
            <ReloadIcon :getRepoLazy="getRepoLazy" />
          </div>
          <div class="repo__content">
            <div class="repo_searchBar">
              <SearchComponent
                :value="searchInput"
                @search="handleSearch"
                placeholder="Search repository"
              />
              <button
                class="btn btnPrimary"
                @click="getRepo"
                :disabled="searchDisabled"
                :class="{btnDisabled: searchDisabled}"
              >
                Search
              </button>
            </div>
            <preloader v-if="loading" :width="90" :height="90" />
            <div class="error" v-if="error && !loading">
              <p>{{ error }}</p>
            </div>
            <repo v-if="!loading && !error" :repos="repos" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import apiService from "@/services/apiMainService";
import repo from "@/components/RepoComponent.vue";
// UI
import preloader from "@/components/UI/PreloaderComponent.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import ReloadIcon from "@/components/UI/ReloadIcon.vue";

export default {
  components: {repo, preloader, SearchComponent, ReloadIcon},
  data() {
    return {
      searchInput: "",
      loading: false,
      error: null,
    };
  },
  computed: {
    repos() {
      return this.$store.getters.getRepos;
    },
    searchDisabled() {
      return this.searchInput.length <= 3;
    },
  },
  methods: {
    handleSearch(val) {
      this.searchInput = val;
    },
    getRepoLazy() {
      this.loading = true;
      setTimeout(() => {
        this.getRepo();
      }, 1800);
    },
    async getRepo() {
      console.log(this.searchInput);
      this.loading = true;
      this.error = null;
      try {
        const response = await apiService.getRepositories(this.searchInput);
        this.$store.dispatch("setRepos", response.data.items);
      } catch {
        (error) => {
          console.log(error);
          this.error = "Error: Network Error";
        };
      } finally {
        () => (this.loading = false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.repo__wrapper {
  width: 100%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 12px 22px 0 rgba(0, 0, 0, 0.1);
}

.repo__content {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
}

.repo-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
  }
}
.repo_searchBar {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
}
.error {
  color: red;
  font-size: 18px;
  margin-top: 20px;
}
</style>
