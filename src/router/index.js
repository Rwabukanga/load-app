import { createRouter, createWebHistory } from 'vue-router'
import DealView from '../views/DealView.vue'

import DoctorList from '../views/DoctorList.vue'
import LoginPage from '../views/LoginPage.vue'
import PatientPage from '../views/PatientPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ReviewsPage from '../views/ReviewsPage.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: DealView
  },

  {
    path: '/doctorlist',
    name: 'doctorlist',
    component: DoctorList
  },

  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },

  {
    path: '/patientlist',
    name: 'patientlist',
    component: PatientPage
  },

  {
    path: '/registration',
    name: 'registration',
    component: RegisterPage
  },

  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsPage
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
