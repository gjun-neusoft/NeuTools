import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Home from '../pages/home.vue'
import String from '../pages/string.vue'
import Number from '../pages/number.vue'
import ImgToBase64 from '../pages/imgToBase64.vue'

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
    },
    {
        path: '/imgToBase64',
        name: 'ImgToBase64',
        component: ImgToBase64
    }

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;