import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import api from './mixins/api'

createApp(App).use(store).use(router).use(VueAxios,axios).mixin(api).mount('#app')
