<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div 
      ref="cursorHalo"
      class="fixed pointer-events-none z-50 w-24 h-24 rounded-full mix-blend-multiply dark:mix-blend-screen transition-transform duration-200 ease-out"
      :style="`transform: translate(-50%, -50%); background: radial-gradient(circle, ${isDark ? 'rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.05) 30%, rgba(59,130,246,0.02) 60%, transparent 100%' : 'rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.08) 30%, rgba(59,130,246,0.04) 60%, transparent 100%'}); box-shadow: 0 0 60px 30px ${isDark ? 'rgba(59,130,246,0.06)' : 'rgba(59,130,246,0.12)'}, 0 0 100px 50px ${isDark ? 'rgba(59,130,246,0.03)' : 'rgba(59,130,246,0.06)'};`"
    ></div>

    <section class="pt-20 pb-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="mb-8">
          <h1 class="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Joshua Gilley
          </h1>
          <h2 class="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-8">
            Software Engineer
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            I build scalable, user-focused applications in health tech and logistics environments. 
            Passionate about creating software that makes a meaningful impact on people's lives.
          </p>
        </div>
        
        <div class="flex flex-wrap gap-4 mb-12">
          <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">React</span>
          <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">TypeScript</span>
          <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Node.js</span>
          <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">Python</span>
          <span class="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">AWS</span>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#projects" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 text-center">
            View My Work
          </a>
          <a href="#contact" class="px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-center">
            Get In Touch
          </a>
        </div>
      </div>
    </section>

    <section id="about" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-12">About</h2>
        
        <div class="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate software engineer who graduated from College of Charleston with a B.S. in Computer Science (GPA: 3.7). My journey began with a curiosity about how technology can solve real-world problems, particularly in healthcare and research environments.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Over the past five years, I've led full-cycle development on clinical data visualization tools at Charles River Labs, built serverless applications that saved companies hundreds of thousands of dollars, and developed innovative solutions using cutting-edge technologies like React, TypeScript, Node.js, and AWS.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in creating software that not only works well but also makes a meaningful impact on people's lives. Whether it's improving clinical workflows, optimizing business processes, or building tools that help researchers analyze data more effectively, I'm passionate about working on projects that matter.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-64 h-64 rounded-full mx-auto mb-8 overflow-hidden shadow-xl">
              <img src="/7.jpeg" alt="Joshua Gilley" class="w-full h-full object-top object-cover" />
            </div>
            
            <div class="grid grid-cols-3 gap-6">
              <div class="text-center">
                <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">20K+</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Users Impacted</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">$200K+</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Cost Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-12">Experience</h2>
        
        <div class="space-y-12">
          <div class="border-l-4 border-blue-500 pl-8">
            <div class="mb-4">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Apr 2023 — Feb 2025</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Senior Software Developer</h3>
              <div class="text-blue-600 dark:text-blue-400 font-medium">Charles River Laboratories</div>
            </div>
            
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              <li>Led end-to-end development of the Data & Findings RESTful API for Apollo, ensuring alignment with functional requirements and delivering real-time access to study data for over 20,000 study directors.</li>
            </ul>
            
            <div v-if="showCharlesRiverDetails" class="mb-4 space-y-2">
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Designed and implemented a permissions notification system using the observer pattern to monitor real-time session states across processes, ensuring clinical pathologists were promptly notified of study access adjustments.</li>
                <li>Improved table performance across the Apollo application by implementing table virtualization, significantly enhancing rendering speed and reducing memory usage for large datasets.</li>
                <li>Developed robust export functionality supporting multiple file formats (PNG, JPEG, PTPX, XLS, XLSX), eliminating the need for clinical pathologists to manually screenshot charts and tables, thus enhancing data workflows.</li>
              </ul>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">RESTful API</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Observer Pattern</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Performance Optimization</span>
              </div>
              <button 
                @click="toggleCharlesRiverDetails" 
                class="ml-4 p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-200"
                :title="showCharlesRiverDetails ? 'Show less details' : 'Show more details'"
              >
                <svg v-if="showCharlesRiverDetails" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="border-l-4 border-green-500 pl-8">
            <div class="mb-4">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Mar 2021 — Apr 2023</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Software Developer</h3>
              <div class="text-green-600 dark:text-green-400 font-medium">Southern Crown Partners, LLC</div>
            </div>
            
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              <li>Developed a serverless React application to optimize inventory logistics, enabling real-time tracking and reducing annual out-of-code product loss by $200,000, by translating business needs into specific technical requirements.</li>
            </ul>
            
            <div v-if="showSouthernCrownDetails" class="mb-4 space-y-2">
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Developed and maintained a Twilio SMS cloud application integrated with Microsoft Teams for 500+ employees, improving communication efficiency by facilitating seamless message delivery across teams.</li>
                <li>Developed an internal e-commerce platform for uniform orders using a React web app and AWS Lambda, streamlining order tracking and significantly improving operational efficiency.</li>
                <li>Led a team project to automate pallet tracking using Raspberry Pis and camera sensors, capturing images of products leaving the warehouse, resulting in improved product accounting and enhanced tracking accuracy.</li>
              </ul>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Serverless</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">AWS Lambda</span>
              </div>
              <button 
                @click="toggleSouthernCrownDetails" 
                class="ml-4 p-2 text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors duration-200"
                :title="showSouthernCrownDetails ? 'Show less details' : 'Show more details'"
              >
                <svg v-if="showSouthernCrownDetails" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="border-l-4 border-purple-500 pl-8">
            <div class="mb-4">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Sep 2020 — Jan 2021</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Programmer</h3>
              <div class="text-purple-600 dark:text-purple-400 font-medium">ATI | Advanced Technology International</div>
            </div>
            
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              <li>Optimized PostgreSQL database performance by implementing indexing, significantly improving retrieval speed for street camera metadata.</li>
            </ul>
            
            <div v-if="showATIDetails" class="mb-4 space-y-2">
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Designed and implemented vanilla JavaScript UI forms for traffic incident reporting, eliminating manual document signing and significantly improving workflow efficiency.</li>
                <li>Automated 20+ manual data validation and migration tasks by implementing daily CRON jobs, reducing errors and improving efficiency.</li>
              </ul>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">PostgreSQL</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">JavaScript</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Database Optimization</span>
              </div>
              <button 
                @click="toggleATIDetails" 
                class="ml-4 p-2 text-gray-500 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200"
                :title="showATIDetails ? 'Show less details' : 'Show more details'"
              >
                <svg v-if="showATIDetails" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="border-l-4 border-yellow-500 pl-8">
            <div class="mb-4">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">Aug 2018 — Mar 2021</div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">R&D Software Developer</h3>
              <div class="text-yellow-600 dark:text-yellow-400 font-medium">College of Charleston</div>
            </div>
            
            <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 mb-4">
              <li>Developed MARS Mapmaker, a React-based CSV mapping tool that automated the processing of thousands of geochronological data lines by enabling CSV imports, UI-based key-value modifications, and JavaScript file generation, streamlining future data uploads.</li>
            </ul>
            
            <div v-if="showCollegeDetails" class="mb-4 space-y-2">
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Collaborated with 15+ professors in Columbia University's Earth and Environmental Sciences Department through bi-monthly meetings to gather requirements, demonstrate updates, and implement new features, improving MARS Mapmaker's functionality and user satisfaction.</li>
              </ul>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">React</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Data Processing</span>
                <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm">Research Tools</span>
              </div>
              <button 
                @click="toggleCollegeDetails" 
                class="ml-4 p-2 text-gray-500 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400 transition-colors duration-200"
                :title="showCollegeDetails ? 'Show less details' : 'Show more details'"
              >
                <svg v-if="showCollegeDetails" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">Projects</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Apollo Data & Findings API</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Led end-to-end development of RESTful API serving 20,000+ study directors with real-time access to clinical study data.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">RESTful API</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Clinical Data</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Microservices</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Served 20,000+ study directors • Improved data access efficiency
            </div>
          </div>

          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Inventory Logistics App</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Serverless React application optimizing inventory logistics with real-time tracking capabilities.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Serverless</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">AWS Lambda</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Reduced annual product loss by $200,000 • Real-time tracking
            </div>
          </div>

          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">MARS Mapmaker</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              React-based CSV mapping tool for geochronological data processing, automating thousands of data lines.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">CSV Processing</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Data Automation</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Automated thousands of data lines • Used by Columbia University researchers
            </div>
          </div>

          <div class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Twilio SMS + Teams Integration</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Cloud application integrating Twilio SMS with Microsoft Teams for seamless communication across 500+ employees.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Twilio</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Microsoft Teams</span>
              <span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm">Cloud Integration</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Improved communication efficiency • 500+ employees served
            </div>
          </div>

          <div v-if="showMoreProjects" class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Internal E-commerce Platform</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              React web app with AWS Lambda backend for uniform orders, streamlining order tracking and improving operational efficiency.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">AWS Lambda</span>
              <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">E-commerce</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Streamlined order tracking • Improved operational efficiency
            </div>
          </div>

          <div v-if="showMoreProjects" class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">IoT Pallet Tracking System</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Raspberry Pi-based system with camera sensors for automated pallet tracking, improving product accounting and warehouse accuracy.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Raspberry Pi</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">IoT Sensors</span>
              <span class="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-sm">Computer Vision</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Improved product accounting • Enhanced tracking accuracy
            </div>
          </div>

          <div v-if="showMoreProjects" class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Permissions Notification System</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Observer pattern implementation for real-time session monitoring, ensuring clinical pathologists are promptly notified of study access adjustments.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">Observer Pattern</span>
              <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">Real-time Monitoring</span>
              <span class="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-sm">Session Management</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Real-time notifications • Improved clinical workflow
            </div>
          </div>

          <div v-if="showMoreProjects" class="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Table Performance Optimization</h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Implemented table virtualization across the Apollo application, significantly enhancing rendering speed and reducing memory usage for large datasets.
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Performance</span>
              <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Virtualization</span>
              <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-sm">Memory Optimization</span>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400">
              <strong>Impact:</strong> Enhanced rendering speed • Reduced memory usage
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button 
            @click="toggleMoreProjects" 
            class="px-8 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            {{ showMoreProjects ? 'Show Less' : 'Load More Projects' }}
          </button>
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">Let's Work Together</h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always open to new opportunities and interesting projects, especially in health tech and research environments.
        </p>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <a href="mailto:joshdgilley@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">joshdgilley@gmail.com</a>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <p class="text-gray-600 dark:text-gray-300">Mount Pleasant, SC</p>
          </div>
        </div>

        <div class="flex justify-center space-x-6">
          <a href="https://github.com/joshuagilley" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joshuadgilley/" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            LinkedIn
          </a>
          <a href="https://the-digital-vanguard.com" target="_blank" rel="noopener noreferrer" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
            Website
          </a>
        </div>
      </div>
    </section>

    <footer class="py-8 px-6 border-t border-gray-200 dark:border-gray-700">
      <div class="container mx-auto text-center text-gray-500 dark:text-gray-400">
        © 2024 Joshua Gilley. Built with Vue 3 + TypeScript + Tailwind CSS.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorHalo = ref<HTMLElement>()
const isDark = ref(false)

let mouseX = 0
let mouseY = 0

const updateCursor = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY
  
  if (cursorHalo.value) {
    cursorHalo.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  }
}

onMounted(() => {
  document.addEventListener('mousemove', updateCursor)
  
  // Check if dark mode is enabled
  if (document.documentElement.classList.contains('dark')) {
    isDark.value = true
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', updateCursor)
})

const showMoreProjects = ref(false)
const toggleMoreProjects = () => {
  showMoreProjects.value = !showMoreProjects.value
}

const showCharlesRiverDetails = ref(false)
const toggleCharlesRiverDetails = () => {
  showCharlesRiverDetails.value = !showCharlesRiverDetails.value
}

const showSouthernCrownDetails = ref(false)
const toggleSouthernCrownDetails = () => {
  showSouthernCrownDetails.value = !showSouthernCrownDetails.value
}

const showATIDetails = ref(false)
const toggleATIDetails = () => {
  showATIDetails.value = !showATIDetails.value
}

const showCollegeDetails = ref(false)
const toggleCollegeDetails = () => {
  showCollegeDetails.value = !showCollegeDetails.value
}
</script>
