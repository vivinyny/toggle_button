import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import ToggleButton from './components/ToggleButton.vue'

const app = createApp(App)

app.use(router);

app.component('toggle-button', ToggleButton);

app.mount('#app');