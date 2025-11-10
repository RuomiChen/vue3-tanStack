// main.ts
import Antd from 'ant-design-vue';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
// Vue Query
import 'ant-design-vue/dist/reset.css';
import { router } from './router';
// 挂载 app
createApp(App).use(Antd).use(router).mount('#root')
