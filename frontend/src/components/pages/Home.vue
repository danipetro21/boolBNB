<script>
import SliderTabs from '../layout/SliderTabs.vue'
import Wrapper from '../layout/Wrapper.vue'
export default {
	components: {
		Wrapper,
		SliderTabs,
	},
}
</script>

<template>
	<Wrapper>
		<h1>Homepage</h1>
		<SliderTabs />
	</Wrapper>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
