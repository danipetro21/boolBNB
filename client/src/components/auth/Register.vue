<script>
import { useAuthStore } from '../../stores/auth'

export default {
	data() {
		return {
			authStore: useAuthStore(),
			user: {
				name: '',
				surname: '',
				birth_day: '',
				email: '',
				password: '',
			},
		}
	},
}
</script>
<template>
	<section class="vh-100" style="background-color: #eee">
		<div class="container h-100">
			<div class="row d-flex justify-content-center align-items-center h-100">
				<div class="col-lg-12 col-xl-11">
					<div class="card text-black" style="border-radius: 25px">
						<div class="card-body p-md-5">
							<div class="row justify-content-center">
								<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
									<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
										Sign up
									</p>

									<form
										@submit.prevent="authStore.onRegister(user)"
										class="mx-1 mx-md-4"
									>
										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example1c"
													>Your Name</label
												>
												<input
													v-model="user.name"
													type="text"
													id="form3Example1c222"
													class="form-control"
												/>
												<!-- <div v-if="authStore.errors.name">
													<span> {{ authStore.errors.name[0] }}</span>
												</div> -->
											</div>
										</div>

										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example1c"
													>Your Surname</label
												>
												<input
													v-model="user.surname"
													type="text"
													id="form3Example1c11"
													class="form-control"
												/>
												<!-- <div v-if="authStore.errors.name">
													<span> {{ authStore.errors.name[0] }}</span>
												</div> -->
											</div>
										</div>

										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-user fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example1c"
													>Your Birthday</label
												>
												<input
													v-model="user.birth_day"
													type="date"
													id="form3Example1c3131"
													class="form-control"
												/>
												<!-- <div v-if="authStore.errors.name">
													<span> {{ authStore.errors.name[0] }}</span>
												</div> -->
											</div>
										</div>

										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example3c"
													>Your Email</label
												>
												<input
													v-model="user.email"
													type="email"
													id="form3Example31313c"
													class="form-control"
												/>
												<!-- <div v-if="authStore.errors.email">
													<span> {{ authStore.errors.email[0] }}</span>
												</div> -->
											</div>
										</div>

										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-lock fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example4c"
													>Password</label
												>
												<input
													v-model="user.password"
													type="password"
													id="form3Example4131c"
													class="form-control"
												/>
												<!-- <div v-if="authStore.errors.password">
													<span> {{ authStore.errors.password[0] }}</span>
												</div> -->
											</div>
										</div>

										<div class="d-flex flex-row align-items-center mb-4">
											<i class="fas fa-key fa-lg me-3 fa-fw"></i>
											<div class="form-outline flex-fill mb-0">
												<label class="form-label" for="form3Example4cd"
													>Repeat your password</label
												>
												<input
													v-model="user.password_confirmation"
													type="password"
													id="form3Exampl414e4cd"
													class="form-control"
												/>
											</div>
										</div>

										<div
											class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
										>
											<button type="submit" class="btn btn-primary btn-lg">
												Register
											</button>
										</div>
									</form>
								</div>
								<div
									class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2"
								>
									<img
										src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
										class="img-fluid"
										alt="Sample image"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;
</style>
