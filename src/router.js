import { createRouter, createWebHistory, createWeHistory } from 'vue-router';

import Toggle from './pages/Toggle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', components: ToggleButton },
    ]
});

export default router;