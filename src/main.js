import { createApp } from 'vue'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'
import routes from './router';

const app = createApp(App)
app.use(routes);
app.use(MotionPlugin)
app.mount('#app')
