

require('./bootstrap');

import Vue from 'vue';

import Vuetify from 'vuetify/lib';
import router from './router.js';
import Vuex from 'vuex';
import App from './MainApp/views/App.vue';

Vue.use(Vuetify);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: {},
    },
    mutations: {},
    actions: {
        login: function(context, data){
            axios.post('/api/user/login', {
                email: data.email,
                password: data.password
            }).then((result) => {
                console.log(result.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    getters: {}
})

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    components: { App },
    router,
    store
});
