import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "About" */ '../views/About.vue'),
        props: true,
        meta: { showModal: true }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "Contact" */ '../views/Contact.vue'),
        props: true,
        meta: { showModal: true }
      },
      {
        path: '/projects/:slug',
        name: 'Project',
        component: () => import(/* webpackChunkName: "Project" */ '../views/Project.vue'),
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
