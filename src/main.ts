import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import LyrPlus from './../packages/components/dist'
import './../packages/components/dist/style.css'
// import LyrPlus from '@lyr-plus/components'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(LyrPlus, {
  size: 'small'
})

app.mount('#app')
