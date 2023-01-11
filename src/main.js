import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

global.$ = jQuery



createApp(App).use(store).use(router).mount('#app')
