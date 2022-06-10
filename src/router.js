import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './views/HomePage.vue';
import MarvelPage from './views/MarvelPage.vue';
import DCPage from './views/DCPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,

        },
        {
            path: '/marvel',
            name: 'marvel',
            component: MarvelPage,

        },
        {
            path: '/dc',
            name: 'dc',
            component: DCPage,

        }
    ],
})