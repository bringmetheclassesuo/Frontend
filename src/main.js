import Vue from 'vue'
import Antd from 'ant-design-vue'
// eslint-disable-next-line no-unused-vars
import App from './App'
import 'ant-design-vue/dist/antd.css'
import Multiselect from 'vue-multiselect'
import VueRouter from 'vue-router'
import LogIn from "@/components/LogIn"
import Search from '@/components/Search'

Vue.use(VueRouter)

Vue.component('multiselect', Multiselect)

Vue.config.productionTip = false

Vue.use(Antd)


const router = new VueRouter({
  routes: [
    { path: '/', component: Search },
    { path: '/login', component: LogIn }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
