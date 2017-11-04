import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  name: ''
}

const mutations = {
  SET_NAME(state, name) {
    state.name = name
    window.sessionStorage.setItem('name', name)
  }
}

const getters = {
  name(state) {
    return state.name
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters
})
