import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
import Notifications from '@kyvg/vue3-notification';
import "./axios"

const app = createApp(App)
app.config.globalProperties.$axios=axios
app.use(store)
    .use(router)
    .use(ElementPlus)
    .use(Notifications)
    .mount('#app')