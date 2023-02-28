import { createApp } from 'vue'

// bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vue route
import router from './router'
import App from './App.vue'

App.use(router)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
