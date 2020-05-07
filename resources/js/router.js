import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './MainApp/views/Home';
import store from './store.js'
import Profile from './MainApp/views/Profile.vue';


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
            meta: {reqAuth: true, reqSub: true}
        },
        {
            path: '/cooking',
            name: 'cooking',
            component: () => import('./MainApp/views/Cooking.vue'),
            meta: {reqAuth: true, reqSub: true}
        },
        {
            path: '/profile',
            name: 'profile',
            component: Profile,
            meta: {reqAuth: true, reqSub: true}
        },
        {
            path: '/onboard',
            name: 'onboard',
            component: () => import('./MainApp/views/Onboard.vue'),
            beforeEnter: (to, from, next) => {
                if(from != 'register'){
                    next({name: 'main'});
                }
            }
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
        },
        {
            path: '/pantry',
            name: 'pantry',
            component: () => import('./MainApp/views/Pantry.vue'),
            meta: {reqAuth: true, reqSub: true}
        }

    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.reqAuth)){
        if(localStorage['user-token']){
            if(localStorage['user-sub-id']){
                next();
            } else {
                next({name: 'onboard'});
            }
        } else {
            next({name: 'login'});
        }
    } else {
        next();
    }
});

export default router;

