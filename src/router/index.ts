import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import doc from '../views/Doc.vue'
import iconDemo from '../components/iconDemo.vue'
import switchDemo from '../components/switchDemo.vue'
import buttonDemo from '../components/buttonDemo.vue'
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: doc,
            children: [
                { path: 'switch', component: switchDemo },
                { path: 'icon', component: iconDemo },
                { path: 'button', component: buttonDemo }
            ]
        }
    ]
})
export default router