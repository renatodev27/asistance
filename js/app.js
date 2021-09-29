const home = Vue.component('home-view', {
    template: '#principal',
    data() {
        return { }
    }
})

const navbar = Vue.component('navbar-view', {
    template: '#navbar',
    data() {
        return{ 
            sidebarStatus: false
        }
    },
    methods: {
        showHideSidebarMenu() {
            (this.sidebarStatus) ? this.sidebarStatus = false : this.sidebarStatus = true;
            this.$emit('sendsidebarstatus', this.sidebarStatus);
        }
    }
})

const sidebar = Vue.component('sidebar-view', {
    template: '#sidebar',
})

const users = Vue.component('users-view', {
    template: '#users',
    data() {
        return {
            
        }
    }
})

const routes = [
    { path: '/home', component: home },
    { path: '/users', component: users},
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,
    el: '#app',
    data: {
        sidebarOpen: false
    },
    methods: {
        recieveSidebarStatus(status) {
            console.log(status);
            this.sidebarOpen = status;
        }
    }
});