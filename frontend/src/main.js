import { createApp } from 'vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vue route
import App from './App.vue'
const app = createApp(App)

import router from './router'

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
