<script>
import { useAuthStore } from '../../stores/auth'

export default {
	data() {
		return {
			authStore: useAuthStore(),
			user: {
				email: '',
				password: '',
			},
		}
	},
}
</script>
<template>
	<form @submit.prevent="authStore.onLogin(user)">
		<p>Please login to your account</p>

		<div class="form-outline mb-4">
			<label class="form-label" for="form2Example11">Email</label>
			<input
				v-model="user.email"
				type="email"
				id="form2Example11"
				class="form-control"
				placeholder="Phone number or email address"
			/>
			<!-- <div v-if="authStore.errors.email">
				<span> {{ authStore.errors.email[0] }}</span>
			</div> -->
		</div>

		<div class="form-outline mb-4">
			<label class="form-label" for="form2Example22">Password</label>
			<input
				v-model="user.password"
				type="password"
				id="form2Example22"
				class="form-control"
			/>
			<!-- <div v-if="authStore.errors.password">
				<span> {{ authStore.errors.password[0] }}</span>
			</div> -->
		</div>

		<div class="text-center pt-1 mb-5 pb-1">
			<button
				class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
				type="submit"
			>
				Log in
			</button>
			<!-- <router-link :to="{ name: 'ForgotPassword' }"
				>Forgot password?</router-link
			> -->
		</div>

		<div class="d-flex align-items-center justify-content-center pb-4">
			<p class="mb-0 me-2">Don't have an account?</p>
			<button type="button" class="btn btn-outline-danger">Create new</button>
		</div>
	</form>
</template>
<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
