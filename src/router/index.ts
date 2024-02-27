import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import ProductView from '../views/ProductView.vue'
import TermsView from '../views/TermsView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: CategoriesView
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductView
    },
    {
      path: '/terms',
      name: 'Terms',
      component: TermsView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
