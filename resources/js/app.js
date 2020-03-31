

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


Vue.component('app', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
});
