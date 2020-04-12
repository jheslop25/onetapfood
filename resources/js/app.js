

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
        user: null,
        token: null
    },
    mutations: {
        storeUser: function(state, data){
            state.user = data;
            console.log(state.user);
        },
        storeToken: function(state, data){
            state.token = data;
            console.log(state.token);
        }
    },
    actions: {
        login: function(context, data){
            axios.post('/api/user/login', {
                email: data.email,
                password: data.password
            }).then((result) => {
                context.commit('storeUser', result.data.user);
                context.commit('storeToken', result.data.access_token);
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
