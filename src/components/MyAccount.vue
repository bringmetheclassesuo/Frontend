<template>
    <div>
        <div class="AccInfo">
            <div style="padding: 10% 0 0 10%">
                <a-card
                    title="Account Info" 
                    :bordered="true" 
                    style="width: 85%"
                >
                <p>Username</p>
                    <a-button @click="signOut">Log out</a-button>
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

            }
        },
        methods:{
           signOut(){
               this.$store.dispatch('changeStatus')
               this.$router.push('/login')
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