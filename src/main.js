import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueAxios from 'vue-axios'
import axios from 'axios'
import api from './mixins/api'
// import Vue from 'vue'
import store from './vuex/store.js'

// Vue.prototype.$store = store
createApp(App).use(router).use(VueAxios,axios).use(store).mixin(api).mount('#app')
