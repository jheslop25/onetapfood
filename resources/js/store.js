import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null,
        _instacart_session: null,
    },
    mutations: {
        storeUser: function(state, data){
            state.user = data;
            console.log(state.user);
        },
        storeToken: function(state, data){
            state._instacart_session = data;
        }
    },
    actions: {

    },
    getters: {

    }
});

export default store;
