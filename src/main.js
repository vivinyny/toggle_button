import { createApp } from 'vue';

import App from './App.vue';
import ToggleButton from './components/ToggleButton.vue'

const app = createApp(App)

app.component('toggle-button', ToggleButton);

app.mount('#app');