/**
 * 公用store模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import TICKET from './module/ticket'
import TRIP from './module/trip'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TICKET,
    TRIP
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
