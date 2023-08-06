import {createRouter, createWebHistory} from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Home',
      component: () => import('../views/Home')
    },
    {
      path: '/About',
      component: () => import('../views/About')
    }
  ]
})