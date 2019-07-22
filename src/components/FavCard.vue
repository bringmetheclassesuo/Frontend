<!--Card that displays schedule, delete button and title-->
<template>
    <div>
        <a-card :title="title" hoverable>
            <div slot="extra">
                <a-button type="default" icon="delete" shape="circle" @click="test"/>
            </div>
            <img src ="../assets/Semester1Schedule.png" style="width: 100%; height:100%"/>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "FavCard",
        props: {
            source:String,
            title:String,
            deleteFunc:Function,
            index:Number
        },
        data() {
            return {

            }
        },
        methods: {
            test(){
                this.deleteFunc(this.index);
            },
        }
    }
</script>

<style scoped>

</style>