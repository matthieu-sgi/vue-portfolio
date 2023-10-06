import '@babel/polyfill'
import 'mutationobserver-shim'
import {Vue, createApp} from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import MyProjects from './components/MyProjects.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const routes = [
  { path: '/', component: App },
  {path: '/projects', component: MyProjects},
];

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: 'history',
});

// router.push('/projects');

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
  

Vue.config.productionTip = false

// const app = new Vue({
//   render: h => h(App),
// });
const app = Vue.createApp({});
app.use(router);
app.mount('#app')
