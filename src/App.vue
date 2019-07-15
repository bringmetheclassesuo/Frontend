<template>
    <div id="app">
        <!--    <Search msg="Welcome to Your Vue.js App"/>-->
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', paddingLeft: '25px' }">
            <div class="logo"/>
            <button class="title" @click="switchpage('/')">Searchinator</button>
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :defaultSelectedKeys=[keyNum]
                    :style="{ lineHeight: '64px' }"
                    style="float: right"
                    :selectedKeys=[keyNum]
            >
                <a-menu-item key="1" @click="switchpage('/')">Search</a-menu-item>
                <a-menu-item key="2" @click="favourite">Favourites</a-menu-item>
                <a-menu-item key="3" @click="switchpage('login')">{{loginPrompt}}</a-menu-item>
            </a-menu>
        </a-layout-header>
        <transition name="component-fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import Search from './components/Search.vue'
    export default {
        name: 'app',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            Search
        },
        data() {
            return {
                keyNum: '1'
            }
        },
        computed: {
            loginStatus(){
                return this.$store.getters.loggedIn;
            },
            loginPrompt(){
                if (this.$store.getters.loggedIn){
                    return 'My Account'
                }
                return 'Log in'
            }
        },
        methods: {
            favourite() {
                if (!this.loginStatus) {
                    const h = this.$createElement
                    this.$info({
                        title: 'You do not have access to this feature',
                        content: h('div', {}, [
                            h('p', 'If you would like to use favourites, please log in'),
                        ]),
                        onOk() {
                        },
                    });
                }
                else{
                    this.keyNum = '2'
                    this.$router.push('favourites')
                }
            },
            switchpage(login) {
                if (this.loginStatus && login == 'login'){
                    this.$router.push({path: 'myaccount'})
                }
                else{
                    this.$router.push({path: login})
                }
                switch (login) {
                    case '/':
                        this.keyNum = '1'
                        break;
                    case 'login':
                        this.keyNum = '3'
                        break;
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 0px;
    }

    .title {
        font-family: 'Mukta', sans-serif;
        z-index: 2;
        float: left;
        font-size: 33px;
        color: #FFF;
        background: none;
        border: none
    }

    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }

    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
