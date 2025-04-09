import 'remixicon/fonts/remixicon.css' // Should be FIRST import
import './assets/main.css' // Then your custom CSS

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './views/Layouts/AppLayout.vue'
import router from './router'

import Sidebar from '@/components/dashboard/Sidebar.vue'
import Header from '@/components/dashboard/Header.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
