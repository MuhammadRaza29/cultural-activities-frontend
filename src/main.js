import { createApp } from 'vue'
import store from './store'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from '@/App.vue'

const app = createApp(App)

app
  .use(store)
  .mount('#app')
