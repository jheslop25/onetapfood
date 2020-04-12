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
});

export default store;