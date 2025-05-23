<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s cubic-bezier(.4,0,.2,1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
