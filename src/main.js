import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/route.js";
import '@/assets/common.css';
import constants from '@/constants';
import { setupStore } from "./store";

const app = createApp(App);
setupStore(app);
app.config.globalProperties.$constants = constants;
app.use(router).mount('#app')
