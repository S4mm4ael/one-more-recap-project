<template>
  <NuxtLayout>
    <transition name="page" mode="out-in">
      <NuxtPage />
    </transition>
  </NuxtLayout>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}
.page-enter,
.page-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
