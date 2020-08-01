import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Clan from '../views/Clan.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/clan/:clanTag',
    name: 'clan',
    component: () => import(/* webpackChunkName: "clan" */ '../views/Clan.vue'),
    props: true
  }
]

// If i want to split code w webPack, 
// {
//   path: '/clan/:id',
//   name: 'clan',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "clan" */ '../views/Clan.vue')
// }

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
