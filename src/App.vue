<template>
  <div id="app">
<!--    <Search msg="Welcome to Your Vue.js App"/>-->
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', paddingLeft: '25px' }">
      <div class="logo"/>
      <h1 class="title">Searchinator</h1>
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
        <a-menu-item key="3" @click="switchpage('login')">Log In</a-menu-item>
      </a-menu>
    </a-layout-header>
    <transition name="fade">
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
  data(){
    return{
      keyNum: '1',
      loggedIn: false
    }
  },
  methods: {
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
  z-index: 2;
  position: fixed;
  float: left;
  font-size: xx-large;
  color: #FFFFFF;
}
</style>
