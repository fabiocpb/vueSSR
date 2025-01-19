import './assets/main.css'

import { createSSRApp  } from 'vue'
import { createRouter } from './router'
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createSSRApp(App)
const router = createRouter()

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
    app.mount('#app')
})
