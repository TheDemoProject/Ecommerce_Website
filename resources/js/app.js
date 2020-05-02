require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import Main from './components/Main';
import Nav from './layouts/Nav';
Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/Main.vue').default },
    { path: '/test', component: require('./components/ExampleComponent.vue').default }
]

const router = new VueRouter({ mode: 'history', routes })
Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',   
    router,
    render: h => h(Nav)
});

//export default app;
