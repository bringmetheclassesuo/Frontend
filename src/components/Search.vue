<template>
    <div class="hello">

        <div class="search">

            <div style="padding-top: 45%">
                <multiselect
                        style="float: left; width: 92%;"
                        v-model="value" placeholder="Search. . ."
                        track-by="code"
                        label="code"
                        :options="options"
                        :multiple="true"
                ></multiselect>
                <a-popover
                        style="padding: 0"
                        title="Filters"
                        trigger="click"
                        placement="right"
                        v-model="visible"
                >
                    <ul slot="content" style="margin-bottom: 0px">
                        <li slot="content" v-bind:key="filter" v-for="(filter) in filters"
                            style="margin: 0px; width: 100%">
                            <div slot="content">
                                <span slot="content">{{filter.name}}</span>
                                <a-checkbox class="check" slot="content" v-model="filter.check"></a-checkbox>
                            </div>
                        </li>
                    </ul>
                    <div slot="content" style="padding-top: 5%;">
                        <a-button slot="content" style="margin-right: 2%; width: 49%" @click="reset()">Reset</a-button>
                        <a-button type="primary" slot="content" style="width: 49%" @click="visible = !visible">Confirm
                        </a-button>

                    </div>
                    <a-button type="secondary" shape="circle" icon="filter" style="margin-top: 0.5%;" :size="large"/>
                </a-popover>

                <!--    <span> {{filters}}</span>-->
            </div>
            <a-button type="secondary" :size="large" @click="resetSearch" style="margin: 10px; width: 130px">Reset</a-button>
            <a-button type="primary" :size="large" @click="search" style="margin: 5px; width: 130px">Generate</a-button>


        </div>
    </div>
</template>

<script>

    export default {
        name: 'Search',
        components: {},
        props: {
            msg: String
        },
        data() {
            return {
                value: null,
                options: [{name: 'Discrete Mathematics for Computing', code: 'MAT1384'},
                    {name: 'Digital Systems', code: 'ITI1100'},
                    {name: 'Technical Report Writing', code: 'ENG1112 '},
                    {name: 'Calculus I', code: 'MAT1320'}],
                filters: [{check: false, name: "Morning"}, {check: false, name: "Afternoon"}, {
                    check: false,
                    name: "Evening"
                }],
                visible: false,
                keyNum: '1',
                loggedIn: false
            }
        },
        methods: {
            search() {
                if (this.value == null || this.value.length == 0){
                    this.$message.warning('No courses are selected');
                }
                else{
                    this.$router.push('schedules');
                }
            },
            do() {

                // eslint-disable-next-line no-unused-vars
                let text;
                text = '';
                return this.value.map(v => v.name).join(', ')
            },
            reset() {
                for (let i of this.filters) {
                    i.check = false;
                }
            },
            favourite(){
                this.keyNum = '2'
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
            },
            resetSearch(){
                this.value = null
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    div.search {
        width: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .check {
        float: right;
    }

    .title {
        z-index: 2;
        position: fixed;
        float: left;
        font-size: xx-large;
        color: #FFFFFF;
    }
</style>
