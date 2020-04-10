

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


// Vue.component('App', require('./views/App.vue').default);
// Vue.component('Dashboard', require('./views/MainApp.vue').default);
// Vue.component('Onboard', require('./views/Onboard.vue').default);
// Vue.component('Cooking', require('./views/Cooking.vue').default);
// Vue.component('Home', require('./views/Home.vue').default);
// Vue.component('Service', require('./views/Service.vue').default);
// Vue.component('Vendor', require('./views/Vendor.vue').default);
import App from './views/App.vue';

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { App },
    router
});
