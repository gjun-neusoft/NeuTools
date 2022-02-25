import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../pages/home.vue'
import String from '../pages/string.vue'
import Number from '../pages/number.vue'

const routes = [{
        path: '/',
        name: 'Home',
        redirect: '/string',
        component: Home
    },
    {
        path: '/string',
        name: 'String',
        component: String
    },
    {
        path: '/number',
        name: 'Number',
        component: Number
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;