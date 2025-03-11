import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/main.vue'
import Content from '@/pages/content.vue'
import About from '@/pages/ShowPicture.vue'
import Person from '@/pages/person.vue'
import East from '@/pages/East.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: Main
        },
        {
            path: '/content',
            component: Content
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/person',
            component: Person
        },
        {
            name: 'east',
            path: '/east',
            component: East
        },
        {
            path: '/main',
            component: Main
        }
    ]
})

export default router