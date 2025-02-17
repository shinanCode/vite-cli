import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import router from '@/router'

const pinia = createPinia()
const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app')
