

require('./bootstrap');

import Vue from 'vue';

import Vuex from 'vuex';
import Vuetify from 'vuetify/lib';
import router from './router.js';

Vue.use(Vuex);
Vue.use(Vuetify);


const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});



import App from './MainApp/views/App.vue';

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { App },
    router
});
