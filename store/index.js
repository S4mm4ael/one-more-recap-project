import axios from "axios";

export const state = () => ({
  posts: [],
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
};

export const actions = {
  async fetchPosts({commit}) {
    const response = await axios.get("http://localhost:3000/posts");
    commit("setPosts", response.data);
  },
  async addPost({commit}, post) {
    console.log(post);
    const response = await axios.post("http://localhost:3000/posts", post);
    commit("setPosts", response.data);
  },
};

export const getters = {
  allPosts(state) {
    return state.posts;
  },
};
