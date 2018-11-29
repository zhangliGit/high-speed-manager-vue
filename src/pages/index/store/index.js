/**
 * 公用store模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import ticket from './module/ticket'
import trip from './module/trip'
import service from './module/service'
import person from './module/person'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ticket,
    trip,
    service,
    person
  },
  state: {
  },
  getters: {
  },
  actions: {
  },
  mutations: {
  }
})
