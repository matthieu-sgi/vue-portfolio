import Vue from 'vue'
import MyProjects from './components/MyProjects.vue'
import MyHomepage from './components/MyHomepage.vue'
import AboutMe from './components/AboutMe.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MyHomepage },
  { path: '/projects', component: MyProjects },
  { path: '/me', component: AboutMe },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

