import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './MainApp/views/Home';
import store from './store.js'


Vue.use(VueRouter);

const router = new VueRouter({

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('./MainApp/views/MainApp.vue'),
            meta: {reqAuth: true}
        },
        {
            path: '/cooking',
            name: 'cooking',
            component: () => import('./MainApp/views/Cooking.vue'),
            meta: {reqAuth: true}
        },
        {
            path: '/onboard',
            name: 'onboard',
            component: () => import('./MainApp/views/Onboard.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./MainApp/views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./MainApp/views/Register.vue')
        }

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.reqAuth)){
        if(localStorage['user-token']){
            next();
        } else {
            next({name: 'login'});
        }
    } else {
        next();
    }
});

export default router;

