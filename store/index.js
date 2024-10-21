import Vue from "vue";

// export default new Vuex.Store({
//   state: {
//     posts: [],
//   },
//   mutations: {
//     SET_POSTS(state, posts) {
//       state.posts = posts;
//     },
//     ADD_POST(state, post) {
//       state.posts.push(post);
//     },
//   },
//   actions: {
//     async fetchPosts({commit}) {
//       try {
//         const response = await axios.get("https://api.example.com/posts");
//         commit("SET_POSTS", response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     },
//     async addPost({commit}, post) {
//       try {
//         const response = await axios.post(
//           "https://api.example.com/posts",
//           post
//         );
//         commit("ADD_POST", response.data);
//       } catch (error) {
//         console.error("Error adding post:", error);
//       }
//     },
//   },
// });

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

Vue.use(store);
