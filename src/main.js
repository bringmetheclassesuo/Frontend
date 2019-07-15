import Vue from 'vue'
import Antd from 'ant-design-vue'
// eslint-disable-next-line no-unused-vars
import App from './App'
import 'ant-design-vue/dist/antd.css'
import Multiselect from 'vue-multiselect'
import VueRouter from 'vue-router'
import LogIn from "@/components/LogIn"
import Search from '@/components/Search'
import CreateAccount from "@/components/CreateAccount";
import store from './store/store'
import Favourites from "@/components/Favourites";
import Schedules from "@/components/Schedules";
import MyAccount from "@/components/MyAccount";

Vue.use(VueRouter)

Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

Vue.use(Antd)

Vue.config.productionTip = false;

const router = new VueRouter({
    routes: [
        {path: '/', component: Search},
        {path: '/login', component: LogIn},
        {path: '/create', component: CreateAccount},
        {path: '/favourites', component: Favourites},
        {path: '/schedules', component: Schedules},
        {path: '/myaccount', component: MyAccount}
    ]
})



new Vue({
    store,
    render: h => h(App),
    router
}).$mount('#app')
