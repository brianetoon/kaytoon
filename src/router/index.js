import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Project from '../views/Project.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/projects/:slug',
        name: 'Project',
        component: Project,
        props: true,
        meta: { showModal: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
