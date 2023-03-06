import { createRouter, createWebHistory } from 'vue-router'
const routes = [
	{
		path: '/',
		component: () => import('../components/pages/Home.vue')
	},
	// {
	// 	path: '/',
	// 	component: () => import('../components/pages/Home.vue'),
	// },
	{
		path: '/about',
		component: () => import('../components/pages/About.vue'),
	},
]
const router = createRouter({
	history: createWebHistory(),
	routes,
})
export default router