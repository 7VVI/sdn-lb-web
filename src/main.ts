import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/iconfont/iconfont.css'
import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const app = createApp(App)
const pinia = createPinia();

import { Modal, message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css';
import 'ant-design-vue/es/modal/style/css';

app.config.globalProperties.$Modal = Modal;
app.config.globalProperties.$message = message;


pinia.use(piniaPluginPersistedstate);
app.use(router)
app.use(pinia)

app.mount('#app')
