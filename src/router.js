import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Collection from './views/Collection.vue'
import Itemize from './views/Itemize.vue'
import User from './views/User.vue'
import Newhome from './views/Newhome.vue'
import Oldhome from './views/Oldhome.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Newhome',
      component: Newhome
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/oldhome',
      name: 'Oldhome',
      component: Oldhome
    },
    {
      path: '/User',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: User
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/itemize/:id',
      name: 'itemize',
      component: Itemize
    },
  ]
})
