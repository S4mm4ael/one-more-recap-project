<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="repo__wrapper">
          <div class="repo-title">
            <p>GitHub repository search</p>
            <ReloadIcon :getrepoLazy="getrepoLazy" />
          </div>
          <div class="repo__content">
            <SearchComponent
              :value="searchInput"
              @search="handleSearch"
              placeholder="Search repository"
            />
            <preloader v-if="loading" :width="90" :height="90" />
            <div class="error" v-if="error">
              <p>{{ error }}</p>
            </div>
            <repo v-if="!loading && !error" :messages="messages" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
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
  mounted() {
    this.getrepo();
  },
  computed: {
    messages() {
      return this.$store.getters.getMessageMain;
    },
  },
  methods: {
    handleSearch(val) {
      console.log(val);
      this.searchInput = val;
    },
    getrepoLazy() {
      this.loading = true;
      setTimeout(() => {
        this.getrepo();
      }, 1800);
    },
    getrepo() {
      this.loading = true;
      axios
        .get("https://tocode.ru/static/c/vue-pro/repoApi.php")
        .then((reseponse) => {
          let res = reseponse,
            messages = [],
            messagesMain = [];

          // filter
          for (let i = 0; i < res.length; i++) {
            if (res[i].main) messagesMain.push(res[i]);
            else messages.push(res[i]);
          }

          this.$store.dispatch("setMessage", messages);
          this.$store.dispatch("setMessageMain", messagesMain);
        })
        .catch((error) => {
          console.log(error);
          this.error = "Error: Network Error";
        })
        .finally(() => (this.loading = false));
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

.error {
  color: red;
  font-size: 18px;
  margin-top: 20px;
}
</style>
