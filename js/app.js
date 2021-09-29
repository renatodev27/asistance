const principal = Vue.component('principal-view', {
    template: '#principal',
    data() {
        return {

        }
    }
})

const users = Vue.component('users-view', {
    template: '#users',
    data() {
        return {
            
        }
    }
})

const routes = [
    { path: '/', component: principal},
    { path: '/users', component: users},
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app',
    data: {}
});