<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Home from './views/Home.vue'

const isDark = ref(false)

// Theme management
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div id="app" :class="{ 'dark': isDark }">
    <Home />
  </div>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300;
}

/* Container utility */
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
