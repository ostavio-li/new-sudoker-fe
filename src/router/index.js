import {createRouter, createWebHistory} from 'vue-router'
import User from '../components/User.vue'
import Sudoku from "../components/Sudoku.vue";
import Demo from "../components/Demo.vue"
import Home from "../components/home.vue"
import Admin from "../components/admin.vue"

// 静态路由配置

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/adm',
        component: Admin,
        children: [
            {
                path: '/',
                component: User
            },
            {
                path: 'sudoku',
                component: Sudoku
            },
            {
                path: 'user',
                component: User
            },
            {
                path: 'demo',
                component: Home
            }
        ]
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router