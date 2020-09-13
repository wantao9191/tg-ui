import './lib/tg-ui.scss'
import './components/demo.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import lib from './lib/index.ts'
import 'prismjs/themes/prism.css';
// import 'prismjs/themes/prism-coy.css';
const app = createApp(App)
app.use(router)
app.use(lib)
app.mount('#app')
