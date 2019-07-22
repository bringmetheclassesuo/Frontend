<!--Displays user information-->
<template>
    <div>
        <div class="AccInfo">
            <div style="padding-top: 10%">
                <a-card
                    title="Account Info" 
                    :bordered="true" 
                    style="width: 85%; display: inline-block"
                >
                    <a-row type="flex" justify="space-around">
                        <a-col span="12">
                            <p style="float: left; padding-left: 90%">Email:</p>
                        </a-col>
                        <a-col span="12">
                            <p style="float:left;">Admin@cool-mathgames.net</p>
                        </a-col>
                        <a-col span="12">
                            <p style="float: left; padding-left: 90%">Name:</p>
                        </a-col>
                        <a-col span="12">
                            <p style="float:left;">Admin</p>
                        </a-col>
                    </a-row>
                    <a-button type="primary" style="width: 90%; display: inline-block" @click="signOut">Log out</a-button>
                </a-card>
            </div>    
        </div>    
        
    </div>
</template>

<script>
    import ACol from "ant-design-vue/es/grid/Col";
    export default {
        name: "MyAccount",
        components: {ACol},
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