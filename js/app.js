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

/* HOME */
const home = Vue.component('home-view', {
    template: '#principal',
    data() {
        return { }
    }
})

/* PROFILE */
const profile = Vue.component('profile-view', {
    template: '#profile'
})

/* NOTIFICATIONS */
const notifies = Vue.component('notifies-view', {
    template: '#notifies'
})

/* CHAT */
const chat = Vue.component('chat-view', {
    template: '#chat'
})

/* SETTINGS */
const settings = Vue.component('settings-view', {
    template: '#settings'
})

/* RECORDS */
const records = Vue.component('records-view', {
    template: '#records'
})

/* USERS */
const users = Vue.component('users-view', {
    template: '#users',
    data() {
        return { }
    }
})

const routes = [
    { path: '/home', component: home },
    { path: '/notifications', component: notifies},
    { path: '/chat', component: chat},
    { path: '/settings', component: settings},
    { path: '/records', component: records},
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