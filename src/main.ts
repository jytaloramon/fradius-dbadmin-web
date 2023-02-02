import { createApp } from 'vue';

import App from './App.vue';
import appPinia from './modules/appPinia';
import appRouter from './modules/appRouter';

import './assets/main.css';

const app = createApp(App);

app.use(appPinia);
app.use(appRouter);

app.mount('#app');
