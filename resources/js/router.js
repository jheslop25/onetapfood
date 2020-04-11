import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './MainApp/views/Home';
import Main from './MainApp/views/MainApp.vue';
import Cooking from './MainApp/views/Cooking.vue';
import Onboard from './MainApp/views/Onboard.vue';
import Login from './MainApp/views/Login.vue';
import Register from './MainApp/views/Register.vue';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/main',
            name: 'main',
            component: Main
        },
        {
            path: '/cooking',
            name: 'cooking',
            component: Cooking
        },
        {
            path: '/onboard',
            name: 'onboard',
            component: Onboard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        }

    ]
})
