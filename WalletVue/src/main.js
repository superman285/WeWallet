import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Vuetify from 'vuetify'

//import '@/assets/css/mdui.css'
//import '@/assets/js/mdui.js'

import '@/assets/css/reset.css';

import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

Vue.use(Vuetify)