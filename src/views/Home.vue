<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto text-center">
        <div class="mb-8">
          <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Josh Gilley
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Creative Technologist
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-12">
            <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
              Vue.js
            </span>
            <span class="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
              React
            </span>
            <span class="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
              TypeScript
            </span>
            <span class="px-4 py-2 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
              Node.js
            </span>
            <span class="px-4 py-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm font-medium">
              Python
            </span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/projects" 
            class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            View My Work
          </router-link>
          <router-link 
            to="/contact" 
            class="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-lg transition-colors duration-200"
          >
            Get In Touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          What I Do
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frontend Development</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Building responsive, accessible web applications with modern frameworks like Vue.js and React.
            </p>
          </div>
          
          <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Backend Development</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Creating robust APIs and server-side logic with Node.js, Python, and modern databases.
            </p>
          </div>
          
          <div class="text-center p-8 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Creative Solutions</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Designing innovative user experiences and creative technical solutions for complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's collaborate on your next project. I'm always excited to work on new challenges and bring ideas to life.
        </p>
        <router-link 
          to="/contact" 
          class="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-colors duration-200"
        >
          Start a Conversation
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>
