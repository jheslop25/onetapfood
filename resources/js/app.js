

require('./bootstrap');

import Vue from 'vue';

import Vuetify from 'vuetify/lib';
import router from './router.js';
import App from './MainApp/views/App.vue';
import store from './store';
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);




const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { App },
    router,
    store
});
