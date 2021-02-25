import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/global.css'
import lazysizes from '../node_modules/lazysizes'

createApp(App).use(router, lazysizes).mount('#app')
