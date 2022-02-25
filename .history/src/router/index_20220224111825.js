import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../pages/home.vue'
import String from '../pages/string.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/string',
        name: 'String',
        component: String
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;