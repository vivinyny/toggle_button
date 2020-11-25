import { createApp } from 'vue';

import App from '.App.vue';

const app = createApp(App)

app.component('toggle-button', ToggleButton);

app.mount('#app');