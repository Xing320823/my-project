import { createRouter, createWebHistory } from 'vue-router'
import SystemManagement from '../views/SystemManagement.vue'
import OrganizationManagement from '../views/OrganizationManagement.vue'
import IdentityManagement from '../views/IdentityManagement.vue'
import PermissionManagement from '../views/PermissionManagement.vue'
import LogManagement from '../views/LogManagement.vue'

const routes = [
  {
    path: '/',
    name: 'SystemManagement',
    component: SystemManagement
  },
  {
    path: '/organization',
    name: 'OrganizationManagement',
    component: OrganizationManagement
  },
  {
    path: '/identity',
    name: 'IdentityManagement',
    component: IdentityManagement
  },
  {
    path: '/permission',
    name: 'PermissionManagement',
    component: PermissionManagement
  },
  {
    path: '/log',
    name: 'LogManagement',
    component: LogManagement
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
