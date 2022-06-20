import { createApp } from 'vue'
import App from './App'
import { router } from './router'

import '@/assets/styles/index.css'
import '@/assets/styles/plugin.scss'
import '@/assets/styles/common.scss'

createApp(App).use(router).mount('#app')
