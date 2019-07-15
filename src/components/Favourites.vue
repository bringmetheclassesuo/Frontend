<template>
    <div style="padding-top: 6%">
        <h1>Favourites</h1>
        <a-row type="flex" justify="space-around" style="margin-top:4%" v-for="i in ~~((this.favCards.length-1) / 3)+1" v-bind:key="i">
            <a-col :span="7" v-for="(card,index) in favCards.slice((i-1)*3,(i-1)*3+3)" v-bind:key="card">
                <fav-card source = "/assets/Semester1Schedule.png" :title = "'Schedule '+card" :deleteFunc="remove" :index ="(index+(i-1)*3)"/>
            </a-col>
            <a-col :span="7" v-for="x in 3-favCards.slice((i-1)*3,(i-1)*3+3).length" v-bind:key="x">
            </a-col>
        </a-row>
    </div>
</template>

<script>
    import FavCard from "./FavCard.vue"
    export default {
        name: "Favourites",
        components:{FavCard},
        data(){
            return{
                favCards:[1,2,3,4,5,6,7,8,9]
            }
        },
        methods:{
            remove(index){
                this.favCards.splice(index,1);
            }
        }
    }
</script>

<style scoped>

</style>