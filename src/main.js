import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';

import List from './components/List.vue';
import Detail from './components/Detail.vue';
import ListCategory from './components/ListCategory.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';



Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false


const routes = [
  {path: '/', component: List},
  {path: '/detail/:id', component: Detail},
  {path: '/category/:id/elements', component: ListCategory},
  {path: '/type/:id/elements', component: ListCategory},
]

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
