<template>
    <div style="padding-top: 8%">
        <div style="width: 80%; display: inline-block">
            <a-button type="secondary" class="options" shape="circle" :size="large" @click="favourite" style="margin-right: 0"><a-icon type="star" :theme='filler' /></a-button>
            <a-button type="secondary" class="options" shape="circle" :size="large"><a-icon type="download" /></a-button>
            <a-button type="secondary" class="options" shape="circle" :size="large" style="float: left; margin-left: 0" @click="back"><a-icon type="arrow-left" /></a-button>
        </div>
        <a-card hoverable style="width: 80%; display: inline-block">
            <a-carousel arrows>
                <div
                        slot="prevArrow"
                        class="custom-slick-arrow"
                        style="left: 10px;zIndex: 1"
                >
                    <a-icon type="left-circle" />
                </div>
                <div
                        slot="nextArrow"
                        class="custom-slick-arrow"
                        style="right: 10px"
                >
                    <a-icon type="right-circle" />
                </div>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </a-carousel>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "Schedules",
        data(){
            return{
                filler: null
            }
        },
        methods:{
            favourite(){
                if (this.filler === null){
                    this.filler = 'filled'
                }
                else{
                    this.filler = null
                }
            },
            back(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 520px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .custom-slick-arrow {
        width: 25px;
        height: 25px;
        font-size: 25px;
        color: #fff;
        background-color: rgba(31,45,61,.11);
        opacity: 0.3;
    }
    .ant-carousel >>> .custom-slick-arrow:before {
        display: none;
    }
    .ant-carousel >>> .custom-slick-arrow:hover {
        opacity: 0.5;
    }

    .ant-carousel >>> .slick-slide  h3 {
        color: #fff;
        padding-top: 16%;
    }
    .options{
        margin: 8px;
        float: right;
    }
</style>