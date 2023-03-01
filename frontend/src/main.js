import { createApp } from 'vue'
// remix icons
import 'remixicon/fonts/remixicon.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// vue route
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(router)
app.mount('#app')
