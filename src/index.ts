// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

// Vue Query
import { VueQueryPlugin } from '@tanstack/vue-query'

// 挂载 app
createApp(App).use(VueQueryPlugin).mount('#root')
