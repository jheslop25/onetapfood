import Vue from 'vue';
import Vuex from 'vuex';
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

    },
    getters: {

    }
});

export default store;
