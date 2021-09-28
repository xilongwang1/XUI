import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import component from "./components/component/index.js";
Vue.use(component);
import vuexpl from "./vuexpl";
Vue.use(vuexpl);

import permission from "./directive/permission.js";
Vue.use(permission);
import directive from "./directive/index.js";
Vue.use(directive);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
