import './lib/tg-ui.scss'
import './components/demo.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
const app = createApp(App)
app.use(router)
app.mount('#app')
