import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './MainApp/views/Home';
import store from './store.js'
// import Main from './MainApp/views/MainApp.vue';
// import Cooking from './MainApp/views/Cooking.vue';
// import Onboard from './MainApp/views/Onboard.vue';
// import Login from './MainApp/views/Login.vue';
// import Register from './MainApp/views/Register.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    // scrollBehaviour(to, from, savedPosition){
    //     if(savedPosition) {
    //         return savedPosition;
    //     } else {
    //         const position = {};
    //         if (to.hash) {
    //             position.selector = to.hash;
    //             return false;
    //         }
    //     }
    // },
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
            component: () => import('./MainApp/views/Cooking.vue')
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
        if(!store.state.token){
            next({name: 'login'});
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;

