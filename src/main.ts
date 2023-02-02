import { createApp } from 'vue';

import App from './App.vue';
import appPinia from './modules/appPinia';
import appRouter from './modules/appRouter';
import appI18n from './modules/appI18n';

import './assets/main.css';

const app = createApp(App);

app.use(appPinia);
app.use(appRouter);
app.use(appI18n);

app.mount('#app');
