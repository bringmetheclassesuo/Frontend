<template>
    <div>
        <a-card title="Schedule">
            <a-row type="flex">
                <a-col span = "4"><p>TIME</p></a-col>
                <a-col span = "4"><p>Mon</p></a-col>
                <a-col span = "4"><p>Tue</p></a-col>
                <a-col span = "4"><p>Wed</p></a-col>
                <a-col span = "4"><p>Thu</p></a-col>
                <a-col span = "4"><p>Fri</p></a-col>
            </a-row>
            <a-row v-for="i in (15*2)" v-bind:key="i" type="flex">
                <a-col v-if="(i-1)%2==0" span = "4" style="border-top: 1px solid black;"><p>{{(i+7-(i-1)/2)+":00"}}</p></a-col>
                <a-col v-else span = "4" style="border-top: 1px solid black;"/>
                <a-col style = "background:#2928df;" span = "4" v-for="x in 5" v-bind:key="x">
                    <div style = "height:100%; background:#98af93;" v-if="addCourse(x-1, i)">
                        <div style = "border-top: 1px solid black;" v-if="addTopBorder[0]">
                            <p>{{courseJSON.Days[x-1].Courses[courseIndex[x-1]].Name}}</p>
                        </div>
                        <p v-else>{{courseJSON.Days[x-1].Courses[courseIndex[x-1]].Name}}</p>
                    </div>
                    <p v-else-if="addBottomBorder[0]" style="border-top: 1px solid black;">{{i}}</p>
                    <p v-else style="border-top: 1px solid black;">{{i}}</p>
                </a-col>
            </a-row>
        </a-card>
    </div>
</template>

<script>
    export default {
        name: "Schedule",
        props: {
            courseJSON:Object
        },
        data() {
            return {
                courseIndex:[0,0,0,0,0],
                prevWasValid:[false, false, false, false, false],
                addTopBorder:[false],
                addBottomBorder:[false],
            }
        },
        methods: {
            addCourse(dayIndex, blockIndex){
                this.addBottomBorder[0] = false;
                if (this.dayIndex>3){
                    return false;
                }
                if (this.courseIndex[dayIndex]>this.courseJSON.Days[dayIndex].Courses.length-1){
                    return false;
                }
                let courseBlock = this.courseJSON.Days[dayIndex].Courses[this.courseIndex[dayIndex]];
                if (((courseBlock.TimeEnd - courseBlock.TimeStart) > (blockIndex-courseBlock.TimeStart)) && ((blockIndex-courseBlock.TimeStart) >= 0)){
                    if (this.prevWasValid[dayIndex] == false){
                        this.addTopBorder[0] = true;
                    }
                    else{
                        this.addTopBorder[0] = false;
                    }
                    this.prevWasValid[dayIndex] = true;
                    //console.log(courseBlock.Name)
                    return true;
                }
                if (this.prevWasValid[dayIndex] == true){
                    this.prevWasValid[dayIndex] = false;
                    this.courseIndex[dayIndex]++;
                    let temp = this.addCourse(dayIndex, blockIndex);
                    if (temp == true){
                        this.addBottomBorder[0] = false;
                        return true;
                    }
                    this.addBottomBorder[0] = true;
                    return false;
                }
                //console.log(blockIndex)
                return false;
            },
        }
    }
</script>

<style scoped lang="css">
.ant-col-4 {
  border-right: 1px solid black;
}
</style>