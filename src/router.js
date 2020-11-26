import { createRouter, createWebHistory } from 'vue-router';

import Toggle from './pages/Toggle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', components: Toggle },
    ]
});


export default router;