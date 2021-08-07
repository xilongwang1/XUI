import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routerList = [];
function importAll(r) {
  r.keys().forEach(
    (key) => { 
      return routerList.push(r(key).default)}
  );
}
importAll(require.context('./route',true, /\.routes\.js/));
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...routerList,
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
