import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('@/views/TheHome')
const About = () => import('@/views/TheAbout')
const HelloWorld = () => import('@/components/HelloWorld')

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/search', name: 'search', component: () => import('@/views/TheSearch') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: HelloWorld },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
