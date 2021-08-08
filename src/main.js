import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import component from "./components/component/index.js";
Vue.use(component);
import permission from "./directive/permission.js";
Vue.use(permission);
import vuexpl from "./vuexpl";
Vue.use(vuexpl);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
