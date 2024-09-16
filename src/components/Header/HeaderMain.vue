<template>
  <header class="header">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      active-class="active-tab"
    >
      {{ route.name }}
    </router-link>
  </header>
</template>

<script>
import {routes} from "../../router";

export default {
  name: "HeaderMain",
  data() {
    return {
      routes: routes.filter((route) => route.meta.showInHeader),
    };
  },
};
</script>

<style scoped>
.header {
  display: flex;
  gap: 10px;
}

.active-tab {
  font-weight: bold;
  color: blue;
  border-bottom: 2px solid blue;
}
</style>
<script>
import {routes} from "../../router";

export default {
  name: "HeaderMain",
  data() {
    return {
      routes: routes.filter((route) => route.meta.showInHeader),
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
style
