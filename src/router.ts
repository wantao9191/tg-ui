import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import doc from './views/Doc.vue'
import iconDemo from './components/iconDemo.vue'
import switchDemo from './components/switchDemo.vue'
import buttonDemo from './components/buttonDemo.vue'
import tabsDemo from './components/tabsDemo.vue'
import dialogDemo from './components/dialogDemo.vue'
import docDemo from './components/docDemo.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: doc,
            children: [
                { path: '', component: docDemo },
                { path: 'switch', component: switchDemo },
                { path: 'icon', component: iconDemo },
                { path: 'button', component: buttonDemo },
                { path: 'tabs', component: tabsDemo },
                { path: 'dialog', component: dialogDemo }
            ]
        }
    ]
})
export default router