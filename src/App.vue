<script setup lang="ts">
import { ref, onMounted } from 'vue'

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
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <router-link to="/" class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            JG
          </router-link>
          <div class="flex items-center space-x-8">
            <router-link to="/" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</router-link>
            <router-link to="/projects" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</router-link>
            <router-link to="/about" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</router-link>
            <router-link to="/contact" class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</router-link>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="pt-20">
      <RouterView />
    </main>
    
    <footer class="bg-gray-50 dark:bg-gray-800 py-8 mt-16">
      <div class="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        © 2024 Josh Gilley. Built with Vue 3 + TypeScript + Tailwind CSS.
      </div>
    </footer>
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
