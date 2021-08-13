import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routerList = [];
function importAll(r) {
	r.keys().forEach((key) => {
		return routerList.push(r(key).default);
	});
}
importAll(require.context("./route", true, /\.routes\.js/));
const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	...routerList,
];

// 登录白名单
const staticRoutes = [
	// {
	// 	path: "/user",
	// 	name: "user",
	// 	meta: {
	// 		hideInMenu: true,
	// 		title: "XUI",
	// 	},
	// 	component: UserLayout2,
	// 	children: [
	// 		{
	// 			path: "/user/login",
	// 			name: "login",
	// 			meta: { title: "账户密码登录" },
	// 			component: () => import("@/views/user/login.vue"),
	// 		},
	// 		{
	// 			path: "/user/register",
	// 			name: "register",
	// 			meta: { title: "注册账户" },
	// 			component: () => import("@/views/user/register.vue"),
	// 		},
	// 		{
	// 			path: "/user/register-result",
	// 			name: "register-result",
	// 			meta: { title: "注册账户" },
	// 			component: () => import("@/views/user/register-result.vue"),
	// 		},
	// 	],
	// },
	// {
	// 	path: "/:pathMatch(.*)",
	// 	component: () => import("@/views/exception/404.vue"),
	// },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
