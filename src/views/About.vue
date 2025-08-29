<template>
  <div class="min-h-screen py-20 px-4">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          About Me
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Full-stack software engineer with over five years of experience building scalable, user-focused applications in health tech and research environments.
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Left Column - Story -->
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            My Journey
          </h2>
          <div class="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I'm a passionate software engineer who graduated from College of Charleston with a B.S. in Computer Science (GPA: 3.7). My journey began with a curiosity about how technology can solve real-world problems, particularly in healthcare and research environments.
            </p>
            <p>
              Over the past five years, I've led full-cycle development on clinical data visualization tools at Charles River Labs, built serverless applications that saved companies hundreds of thousands of dollars, and developed innovative solutions using cutting-edge technologies like React, TypeScript, Node.js, and AWS.
            </p>
            <p>
              I believe in creating software that not only works well but also makes a meaningful impact on people's lives. Whether it's improving clinical workflows, optimizing business processes, or building tools that help researchers analyze data more effectively, I'm passionate about working on projects that matter.
            </p>
          </div>
        </div>

        <!-- Right Column - Image/Stats -->
        <div class="text-center">
          <div class="w-64 h-64 rounded-full mx-auto mb-8 overflow-hidden">
            <img 
              src="/7.jpeg" 
              alt="Joshua Gilley" 
              class="w-full h-full object-top object-cover"
            />
          </div>
          
          <!-- Quick Stats -->
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">20K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Users Impacted</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400">$200K+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Experience Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>
        
        <div class="space-y-8">
          <!-- Charles River Labs -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Senior Software Developer</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">Charles River Laboratories</p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Apr 2023 - Feb 2025</span>
            </div>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Led end-to-end development of the Data & Findings RESTful API for Apollo, serving 20,000+ study directors</li>
              <li>• Implemented permissions notification system using observer pattern for real-time session monitoring</li>
              <li>• Improved table performance with virtualization, enhancing rendering speed and reducing memory usage</li>
              <li>• Developed robust export functionality supporting PNG, JPEG, PTPX, XLS, XLSX formats</li>
            </ul>
          </div>

          <!-- Southern Crown Partners -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Software Developer</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">Southern Crown Partners, LLC</p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Mar 2021 - Apr 2023</span>
            </div>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Developed serverless React application reducing annual out-of-code product loss by $200,000</li>
              <li>• Built Twilio SMS cloud application integrated with Microsoft Teams for 500+ employees</li>
              <li>• Created internal e-commerce platform for uniform orders using React and AWS Lambda</li>
              <li>• Led Raspberry Pi automation project for pallet tracking with camera sensors</li>
            </ul>
          </div>

          <!-- ATI -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Programmer</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">ATI | Advanced Technology International</p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Sep 2020 - Jan 2021</span>
            </div>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Optimized PostgreSQL database performance with indexing for street camera metadata</li>
              <li>• Designed vanilla JavaScript UI forms for traffic incident reporting</li>
              <li>• Automated 20+ manual data validation tasks with daily CRON jobs</li>
            </ul>
          </div>

          <!-- College of Charleston -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">R&D Software Developer</h3>
                <p class="text-blue-600 dark:text-blue-400 font-medium">College of Charleston</p>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">Aug 2018 - Mar 2021</span>
            </div>
            <ul class="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
              <li>• Developed MARS Mapmaker, a React-based CSV mapping tool for geochronological data processing</li>
              <li>• Collaborated with 15+ professors from Columbia University's Earth and Environmental Sciences Department</li>
              <li>• Automated processing of thousands of geochronological data lines</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Technical Skills
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Frontend -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Frontend
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">React</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">TypeScript</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">JavaScript</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 95%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">HTML/CSS</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-blue-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Backend -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
              </svg>
              Backend
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Node.js</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 90%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Python</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Fastify/Express</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 88%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Microservices</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-green-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Cloud & DevOps -->
          <div class="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Cloud & DevOps
            </h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">AWS</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 85%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Docker</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 80%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">CI/CD</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 82%"></div>
                </div>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600 dark:text-gray-300">Azure DevOps</span>
                <div class="w-24 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div class="bg-purple-600 h-2 rounded-full" style="width: 78%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mb-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What I Value
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Impact</h3>
            <p class="text-gray-600 dark:text-gray-300">
              I believe in creating software that makes a real difference in people's lives, especially in healthcare and research.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Collaboration</h3>
            <p class="text-gray-600 dark:text-gray-300">
              Great products come from great teamwork. I thrive in collaborative environments and value diverse perspectives.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h3>
            <p class="text-gray-600 dark:text-gray-300">
              I'm constantly exploring new technologies and approaches to solve complex problems in creative ways.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic can be added here
</script>
