import axios from "axios";

export default {
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchPosts({commit}) {
      const response = await axios.get("http://localhost:3000/posts");
      commit("setPosts", response.data);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
};
