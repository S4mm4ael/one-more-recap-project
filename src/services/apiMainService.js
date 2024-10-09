import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getRepositories(searchInput) {
    return apiClient.get(`search/repositories`, {params: {q: searchInput}});
  },
};
