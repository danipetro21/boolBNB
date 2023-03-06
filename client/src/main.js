import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
// remix icons
import 'remixicon/fonts/remixicon.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// vue route
import App from './App.vue'
import router from './router'

import './axios'

// pinia
const pinia = createPinia()

pinia.use(({ store }) => {
	store.router = markRaw(router)
})

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
