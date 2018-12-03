import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
/**
 * 车票预订
 */
const ticketList = (resolve) => { require(['../views/ticket/ticketList.vue'], resolve) }
const ticketDetail = (resolve) => { require(['../views/ticket/ticketDetail.vue'], resolve) }

/**
 * 个人中心
 */
const riderList = (resolve) => { require(['../views/person/riderList.vue'], resolve) }
const addRider = (resolve) => { require(['../views/person/addRider.vue'], resolve) }
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/ticketList',
      name: 'ticketList',
      component: ticketList
    },
    {
      path: '/ticketDetail/:id',
      name: 'ticketDetail',
      component: ticketDetail
    },
    {
      path: '/riderList',
      name: 'riderList',
      component: riderList
    },
    {
      path: '/addRider',
      name: 'addRider',
      component: addRider
    }
  ]
})
