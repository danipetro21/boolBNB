<script>
import { RouterLink } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

export default {
	data() {
		return {
			authStore: useAuthStore(),
		}
	},
}
</script>

<template>
	<nav>
		<div>
			<ul>
				<li>
					<router-link :to="{ name: 'Home' }">Home</router-link>
				</li>
			</ul>
		</div>
	</nav>

	<template v-if="!authStore.user">
		<li>
			<router-link :to="{ name: 'Login' }">Login</router-link>
		</li>
		<li>
			<router-link :to="{ name: 'Register' }">Register</router-link>
		</li>
	</template>
	<template v-else>
		<button class="">Logout</button>
		<li>
			<router-link :to="{ name: 'Dashboard' }">Dashboard</router-link>
		</li>
	</template>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
