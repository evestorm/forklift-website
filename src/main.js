import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/route.js";
import '@/assets/common.css';

createApp(App).use(router).mount('#app')
