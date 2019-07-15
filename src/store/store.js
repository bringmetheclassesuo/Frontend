import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: false
    },

    getters: {
        loggedIn:(state) => {
            return state.loggedIn
        }
    },

    mutations: {
        change(state){
            state.loggedIn = !state.loggedIn
        }
    },

    actions: {
        changeStatus(context){
            context.commit('change')
        }
    }
});