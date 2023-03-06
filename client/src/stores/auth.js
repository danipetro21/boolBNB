// import axios
import axios from 'axios'

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
	state: () => ({
		authUser: null,
		authStatus: null,
		isAuthenticated: false,
		authErrors: [],
	}),
	getters: {
		user: state => state.authUser,
		status: state => state.authStatus,
		authenticated: state => state.isAuthenticated,
		errors: state => state.authErrors,
	},
	actions: {
		async getToken() {
			await axios.get('/sanctum/csrf-cookie')
		},
		async getUser() {
			await this.getToken()
			try {
				const data = await axios.get('/api/user')
				this.authUser = data.data
			} catch (error) {
				console.log(error)
			}
		},
		async onLogin(data) {
			await this.getToken()
			try {
				await axios.post('/login', {
					email: data.email,
					password: data.password,
				})
			} catch (error) {
				if (error.response.status === 302) {
					this.authErrors = error.response.data.errors
					console.log(this.authErrors)
				}
			}
			this.isAuthenticated = true
		},
		async onRegister(data) {
			await this.getToken()
			try {
				await axios.post('/register', {
					email: data.email,
					password: data.password,
				})
				this.router.push('/')
			} catch (error) {
				console.log(error)
			}
		},
	},
})
