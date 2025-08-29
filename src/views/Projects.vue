<template>
  <div class="min-h-screen py-20 px-4">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          My Projects
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A collection of real-world projects that showcase my skills in full-stack development, health tech solutions, and innovative problem-solving.
        </p>
      </div>

      <!-- Project Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Apollo Data & Findings API -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Apollo Data & Findings API</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Led end-to-end development of RESTful API serving 20,000+ study directors with real-time access to clinical study data.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">RESTful API</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Clinical Data</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Microservices</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Served 20,000+ study directors • Improved data access efficiency
            </div>
          </div>
        </div>

        <!-- Inventory Logistics App -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Inventory Logistics App</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Serverless React application optimizing inventory logistics with real-time tracking capabilities.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Serverless</span>
              <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">AWS Lambda</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Reduced annual product loss by $200,000 • Real-time tracking
            </div>
          </div>
        </div>

        <!-- MARS Mapmaker -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V9.618a1 1 0 011.447-.894L9 11m0 9l6-3m-6 3V7m6 4l4.553 2.276A1 1 0 0021 16.382V9.618a1 1 0 00-1.447-.894L15 11m0 9V7m0 4l-4.553 2.276A1 1 0 019 16.382V9.618a1 1 0 011.447-.894L15 7m0 4V3"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">MARS Mapmaker</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              React-based CSV mapping tool for geochronological data processing, automating thousands of data lines.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">CSV Processing</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Data Automation</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Automated thousands of data lines • Used by Columbia University researchers
            </div>
          </div>
        </div>

        <!-- Twilio SMS Integration -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-yellow-400 to-orange-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Twilio SMS + Teams Integration</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Cloud application integrating Twilio SMS with Microsoft Teams for seamless communication across 500+ employees.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Twilio</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Microsoft Teams</span>
              <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded">Cloud Integration</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Improved communication efficiency • 500+ employees served
            </div>
          </div>
        </div>

        <!-- E-commerce Platform -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-red-400 to-pink-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">Internal E-commerce Platform</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              React web app with AWS Lambda backend for uniform orders, streamlining order tracking and operational efficiency.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">React</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">AWS Lambda</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Order Management</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Streamlined order tracking • Improved operational efficiency
            </div>
          </div>
        </div>

        <!-- Raspberry Pi Automation -->
        <div class="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="h-48 bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center">
            <svg class="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">IoT Pallet Tracking System</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Raspberry Pi automation project with camera sensors for pallet tracking, capturing images of products leaving warehouse.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Raspberry Pi</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">IoT</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Computer Vision</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
              <strong>Impact:</strong> Improved product accounting • Enhanced tracking accuracy
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Projects Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Other Notable Work
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Permissions Notification System -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Permissions Notification System</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Implemented observer pattern-based notification system for real-time session monitoring across processes, ensuring clinical pathologists are promptly notified of study access adjustments.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Observer Pattern</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Real-time Monitoring</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Session Management</span>
            </div>
          </div>

          <!-- Table Performance Optimization -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table Performance Optimization</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              Improved table performance across Apollo application by implementing table virtualization, significantly enhancing rendering speed and reducing memory usage for large datasets.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">Virtualization</span>
              <span class="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">Performance</span>
              <span class="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded">Memory Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>
