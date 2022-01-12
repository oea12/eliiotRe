import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/Home/HomePage.vue';
import FaqsPage from '@/pages/Faqs/FaqsPage.vue';
import LegalPage from '@/pages/legal/LegalPage.vue';
import TermsPage from '@/pages/terms/TermsPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: FaqsPage
  },
  {
    path: '/aviso-privacidad',
    name: 'privacidad',
    component: LegalPage
  },
  {
    path: '/terminos-condiciones',
    name: 'privacidad',
    component: TermsPage
  },  
]

const router = new VueRouter({
  routes,  
  base : '',
  mode : 'history'
})

export default router
