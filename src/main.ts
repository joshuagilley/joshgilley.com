import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Import view components
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
  ]
})

// Create and mount app
const app = createApp(App)
app.use(router)
app.mount('#app')
