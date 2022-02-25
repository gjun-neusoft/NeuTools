import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../pages/home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/',
        name: 'String',
        component: String
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;