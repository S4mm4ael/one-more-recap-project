<template>
  <header class="header">
    <router-link v-for="route in routes" :key="route.name" :to="route.path">{{
      route.name
    }}</router-link>
  </header>
</template>

<script>
import {routes} from "../../router";

export default {
  name: "HeaderMain",
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
}

.header a {
  text-decoration: none;
  color: #333;
  margin-right: 10px;
}

.header a:hover {
  color: #666;
}
</style>
