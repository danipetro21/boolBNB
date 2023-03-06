<script>
import { RouterLink } from 'vue-router'
</script>

<template>
	<nav>
		<li>
			<router-link to="/">Home</router-link>
		</li>
		<li>
			<router-link to="/about">About</router-link>
		</li>
	</nav>
	<h1>Header</h1>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
