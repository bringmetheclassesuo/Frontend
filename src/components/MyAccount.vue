<template>
    <div>
        <!--<a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', paddingLeft: '25px' }">
            <div class="logo"/>
            <h1 class="title">Searchinator</h1>
            <a-menu
                    theme="dark"
                    mode="horizontal"
                    :defaultSelectedKeys=[keyNum]
                    :style="{ lineHeight: '64px' }"
                    style="float: right"
                    :selectedKeys= [keyNum]
            >
                <a-menu-item key="1" @click="switchpage('/')">Search</a-menu-item>
                <a-menu-item key="2" @click="favourite">Favourites</a-menu-item>
                <a-menu-item key="3" @click="switchpage('login')">Log In</a-menu-item>
            </a-menu>
        </a-layout-header>
        <div><h1 style="padding-top: 20%">My acc</h1></div>-->

        <div class="AccInfo">
            <div style="padding: 10% 0 0 10%">
                <a-card
                    title="Account Info" 
                    :bordered="true" 
                    style="width: 85%"
                >
                <p>Username</p>

                </a-card>
            </div>    
        </div>    
        
    </div>
</template>

<script>
    export default {
        name: "MyAccount",
        data () {
            return {
                keyNum: '3',
                loggedIn: false
            }
        },
        methods:{
           favourite(){
                if (this.loggedIn == false){
                    const h = this.$createElement
                    this.$info({
                        title: 'You do not have access to this feature',
                        content: h('div',{}, [
                            h('p', 'If you would like to use favourites, please log in'),
                        ]),
                        onOk() {},
                    });
                }
           },
            switchpage(login){
                this.$router.push({ path: login })
            }
        }
    }
</script>

<style scoped>
    .title{
        z-index: 2;
        position: fixed;
        float: left;
        font-size: xx-large;
        color: #FFFFFF;
    }
</style>