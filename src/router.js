import { createRouter, createWebHistory } from 'vue-router';

import Toggle from './pages/Toggle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Toggle },
    ]
});


export default router;