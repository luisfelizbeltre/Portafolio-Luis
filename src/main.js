import { createApp } from 'vue'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

import App from './App.vue'

createApp(App).mount('#app')
