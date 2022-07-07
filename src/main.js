import { createApp } from 'vue';
import App from './App';
import { router } from './router';
import { axiosInstance } from '@/api/axios';

import '@/assets/styles/index.css';
import '@/assets/styles/plugin.scss';
import '@/assets/styles/common.scss';

const app = createApp(App).use(router);
app.provide('$http', axiosInstance);
app.mount('#app');
