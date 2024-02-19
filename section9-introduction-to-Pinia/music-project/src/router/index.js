import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/About.vue'
import Manage from '../views/Manage.vue'
import { useUserStore } from '@/stores/user'

// import.meta.env.BASE_URL
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            name: 'home',
            path: '/',
            component: () => import('../views/Home.vue')
        },
        {
            name: 'about',
            path: '/about',
            component: About
        },
        {
            name: 'manage',
            alias: '/manage',
            path: '/manage-music',
            component: Manage,
            beforeEnter(to, from, next) {
                const store = useUserStore()

                if (store.userLoggedIn) {
                    next()
                } else {
                    next({ name: 'home' })
                }
            },
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'logout',
            path: '/logout',
            redirect: { name: 'home' }
        },
        {
            path: '/:catchAll(.*)*',
            redirect: { name: 'home' }
        }
    ],
    linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
    console.log('Global Before Each')
    console.log(to, from)
    next()
})

export default router
