import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Main from './views/MainApp.vue';
import Cooking from './views/Cooking.vue';
import Onboard from './views/Onboard.vue';
import Service from './views/Service.vue';
import Vendor from './views/Vendor.vue';

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
            path: '/service',
            name: 'service',
            component: Service
        },
        {
            path: '/vendor',
            name: 'vendor',
            component: Vendor

      }
    ]
})
