import './assets/main.css'
import "material-icons/iconfont/material-icons.css";

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Vue3Mq } from "vue3-mq";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Mq, {
  preset: 'tailwind'
})

app.mount('#app')
