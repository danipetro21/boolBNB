<script>
import Footer from './Footer.vue'
import Header from './Header.vue'

export default {
	components: {
		Header,
		Footer,
	},
}
</script>

<template>
	<Header />
	<slot></slot>
	<Footer />
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
