<template>
  <div class="hello">
    <div>
      <multiselect v-model="value" placeholder="Search. . ." track-by="code" label="code" :options="options" :multiple="true" ></multiselect>
    </div>
    <div>
      <span> {{value}}</span>
    </div>
    <a-button type="primary" @click="openNotification">Open the notification box</a-button>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  components: {},
  props: {
    msg: String
  },
  data () {
    return {
      value: null,
      options: [{ name: 'Discrete Mathematics for Computing', code: 'MAT1384' },
        { name: 'Digital Systems', code: 'ITI1100' },
        { name: 'Technical Report Writing', code: 'ENG1112 ' },
        { name: 'Calculus I', code: 'MAT1320'}]
    }
  },
  methods: {
    openNotification () {
      this.$notification.open({
        message: 'Notification Title',
        description: 'testcase',
        onClick: () => {
            this.console.log('Notification Clicked!');
        },
      });
    },
    do(){

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
</style>
