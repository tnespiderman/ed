import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Story from './views/Story.vue'
import Chubz from './views/Chubz.vue'  
import Promposal from './views/Promposal.vue'

const routes = [
    {
        path: '/',
        name: 'Story',
        component: Story,
    },
    {
        path: '/Chubz',
        name: 'Chubz',
        component: Chubz,
    },
    {
        path: '/Secret',
        name: 'Promposal',
        component: Promposal,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App).use(router).mount('#app')
