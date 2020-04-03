

require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex';
import Vuetify from 'vuetify/lib';

Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {}
});


Vue.component('app', require('./components/App.vue').default);
Vue.component('Dashboard', require('./components/MainApp.vue').default);
Vue.component('Onboard', require('./components/Onboard.vue').default);
Vue.component('Cooking', require('./components/Cooking.vue').default);
Vue.component('Home', require('./components/Home.vue').default);



const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
