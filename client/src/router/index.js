import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../components/pages/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../components/pages/About.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../components/auth/Login.vue'),
	},
	{
		path: '/register',
		name: 'Register',
		component: () => import('../components/auth/Register.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../components/auth/Dashboard.vue'),
		// beforeEnter: (to, from, next) => {
		// 	const authStore = useAuthStore()
		// 	if (authStore.isAuthenticated) {
		// 		next()
		// 	} else {
		// 		next('/login')
		// 	}
		// },
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router
